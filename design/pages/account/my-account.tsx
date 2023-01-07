import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import React, { useState, useEffect, Fragment } from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { Profile } from "../../types/user";
import { makeUrl } from "../../lib/backendapi";

const meta_data = {
  title: "VietCatholicJp-Profile",
  description: "Thông tin cá nhân",
  ogUrl: "/account/my-account",
  ogImage: "/vietcatholicjp-bg.jpeg",
};

const MyAccount: NextPage = () => {
  const { data: session, status } = useSession();
  const [isLoading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    user: {
      username: "",
      email: "",
      is_staff: false,
      groups: [{ name: "" }],
    },
    full_name: "",
    address: "",
    phone_number: "",
  });
  const [profile_full_name, setProfileFullName] = useState("");
  const [profile_address, setProfileAddress] = useState("");
  const [profile_phone_number, setProfilePhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [request_status, setRequestStatus] = useState("");

  function closeModal() {
    setIsOpen(false);
    if (message == "/register/mass") {
      Router.push(message);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function setProfileVariablesValue(
    fullname: string,
    address: string,
    phone: string
  ) {
    setProfileFullName(fullname);
    setProfileAddress(address);
    setProfilePhoneNumber(phone);
  }

  useEffect(() => {
    //console.log(session)
    if (status == "loading") {
      setLoading(true);
    }
    if (status == "authenticated") {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      };
      fetch(makeUrl("/api/account/profile"), {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data["status"] == "ok") {
            setProfile(data.data.profile);
            console.log(data);
            setProfileVariablesValue(
              data.data.profile.profile_full_name,
              data.data.profile.profile_address,
              data.data.profile.profile_phone_number
            );
          } else {
            setRequestStatus("error");
            setMessage(data["message"]);
            openModal();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setLoading(false);
    } else {
      Router.push("/account/signin");
    }
  }, [session]);

  const handleUpdateProfile = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (status == "authenticated") {
      let check = false;
      setRequestStatus("");
      if (profile_full_name.length > 6) {
        if (profile_phone_number.length == 0) {
          // phone not valid
          setProfilePhoneNumber("000-000-0000");
        }
        if (profile_address.length > 10) {
          check = true;
        } else {
          // address not valid
          setRequestStatus("error");
          setMessage("Địa chỉ không hợp lệ.");
          openModal();
        }
      } else {
        // name not valid
        setRequestStatus("error");
        setMessage("Tên không hợp lệ, vui lòng điền đầy đủ.");
        openModal();
      }
      if (check) {
        setRequestStatus("");
        setMessage("");
        let headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        };
        fetch(makeUrl("/api/account/profile"), {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            profile_full_name: profile_full_name,
            profile_address: profile_address,
            profile_phone_number: profile_phone_number,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data["status"] == "ok") {
              setProfile(data.data.profile);
              setProfileVariablesValue(
                data.data.profile.profile_full_name,
                data.data.profile.profile_address,
                data.data.profile.profile_phone_number
              );
              setRequestStatus("ok");
              setMessage("/register/mass");
            } else {
              setProfileVariablesValue(
                profile.full_name,
                profile.address ? profile.address : "",
                profile.phone_number ? profile.phone_number : ""
              );
              setRequestStatus("error");
              setMessage(data["message"]);
            }
            openModal();
          })
          .catch((error) => {
            setRequestStatus("error");
            setMessage(error);
            openModal();
          });
      }
    } else {
      Router.push("/account/signin");
      //console.log('not authenticated')
    }
  };

  return (
    <>
      <Layout meta_data={meta_data} current_page="home">
        <section className="max-w-3xl mt-24 mx-auto px-4">
          <div className="space-y-4 text-center">
            <h2 className="text-gray-900 text-3xl font-semibold">
              Thông tin cá nhân
            </h2>
            <h3 className="text-gray-600 text-xl font-semibold">
              Giáo đoàn công giáo Việt Nam tại Nhật Bản
            </h3>
          </div>
          <div className="flex flex-col mt-8 items-center">
            <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="py-8 px-8 max-w-sm sm:mt-6 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg space-y-2 sm:py-4 flex flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-6">
                <img
                  className="w-24 h-24 rounded-full shadow-lg"
                  src={profile?.image}
                  alt={profile?.full_name}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <h3 className="text-2xl text-white font-semibold">
                      {profile.user?.username}
                    </h3>
                    <p className="text-white font-medium">
                      {profile.user?.email}
                    </p>
                  </div>
                </div>
              </div>
              {profile.user?.is_staff ? (
                <div className="flex flex-col border-b mt-8 items-center pb-4">
                  <div className="min-w-sm w-full px-2 md:px-8 max-w-md">
                    <h3 className="text-gray-600 text-xl font-semibold">
                      Menu
                    </h3>
                    <ul role="list" className="space-y-4 my-4">
                      {profile.user?.groups?.map((group, idx) => (
                        <li
                          key={idx}
                          className="mx-4 border border-cyan-500 rounded p-2 space-x-3"
                        >
                          <Link
                            href={
                              "/manage/" +
                              (group["name"] == "manager" ? "" : group["name"])
                            }
                          >
                            <a className="flex">
                              <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Check icon</title>
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span className="text-base ml-8 font-normal leading-tight text-gray-500 dark:text-gray-400">
                                {group["name"]}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="flex flex-col mt-8 items-center pb-10">
                <div className="min-w-sm w-full px-2 md:px-8 max-w-md">
                  <form className="space-y-4" onSubmit={handleUpdateProfile}>
                    <div>
                      <label
                        htmlFor="floating_full_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Họ tên
                      </label>
                      <input
                        type="text"
                        name="floating_full_name"
                        id="floating_full_name"
                        value={profile_full_name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setProfileFullName(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tên thánh, Họ tên"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={profile_phone_number}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setProfilePhoneNumber(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="098-130-2310"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Địa chỉ hiện tại
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={profile_address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setProfileAddress(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Saitama, Toda Niizo 1688-2"
                        required
                      />
                    </div>
                    <div className="flex mt-4 min-w-sm space-x-3 md:mt-6">
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Cập nhập
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {request_status == "ok"
                            ? "Yêu cầu thành công"
                            : "Yêu cầu không thành công"}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">{message}</p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            OK
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MyAccount;
