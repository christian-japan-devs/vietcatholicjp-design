import Layout from '../components/layout/Layout'
import {MetaProps} from '../components/layout/meta'
const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}
export default function Home() {

  return (
    <Layout meta_data={meta_data}>
      <div>
        <div className="hero sm:min-h-screen" style={{ backgroundImage: `url("/vietcatholicjp-bg.jpeg")` }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-3xl sm:text-5xl font-bold">Giáo đoàn công giáo Việt Nam tại Nhật</h1>
              <p className="mb-5 sm:text-3xl font-bold">在日ヴィエトナム人・カトリック共同体</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-3xl pt-4 pb-4 sm:pt-8 sm:pb-8">
          <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
              Thư Mục vụ
              </h1>
              <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
              Anh chị em rất thân mến,
              Ngày 09 tháng 10 vừa qua, Đức Thánh Cha Phanxcô đã tuyên phong hiển thánh cho hai chân phước Gioan Baotixita Scalabrini, 
              Giám Mục sáng lập Dòng Scalabrini và chân phước Artemide Zatti, trợ sĩ Dòng Salesio Don Bosco. 
              Việc tuyên phong hiển thánh này nói lên ước nguyện của Hội Thánh trong hoàn cảnh hiện nay: thao thức săn sóc cho người di dân tỵ nạn và người nghèo. 
              </p>
              <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
              Thánh Scalabrini đã lập ra một hội dòng chuyên môn lo lắng và chăm sóc cho người di dân và tỵ nạn. 
              Ngày nay, thế giới đang đứng trước làn sóng đông đảo những người, vì hoàn cảnh chính trị, kinh tế, tôn giáo, phải bỏ quê hương, làng xóm, tỵ nạn đến những đất nước khác để may ra có thể có một cuộc sống tốt đẹp hơn. Nơi vùng đất tạm dung, họ phải trực diện với biết bao khó khăn, thách đố về ngôn ngữ, văn hóa, nhà cửa, công việc, và Giáo Hội, đặc biệt qua các tu sĩ dòng Scalabrini, là một khí cụ Chúa dùng để nâng đỡ anh chị em di dân, tỵ nạn.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg hover:bg-gray-200 px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Đọc tiếp
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 sm:flex sm:flex-col sm:items-center">
        <h1 className="text-4xl mb-4 text-cyan-800 text-center font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
          Thông báo
        </h1>
        <div className="sm:justify-center sm:rounded-xl carousel carousel-center max-w-md md:max-w-6xl p-4 space-x-4 bg-gradient-to-r from-teal-400 to-cyan-400">
          <div className="carousel-item">
            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Lịch tháng 1, 2023</h2>
                <p>Xin gửi tới quý cộng đoàn giờ Lễ, sinh hoạt của các cộng đoàn tháng 1 năm 2023 ...</p>
              </div>
            </div>
          </div> 
          <div className="carousel-item">
            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Các lớp học giáo lý</h2>
                <p>Về việc chuẩn bị để tham dự các lớp giáo lý hôn phối, tân tòng...</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="hero sm:min-h-screen" style={{ backgroundImage: `url("/youth_event/youth-event-1.jpeg")` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-6xl font-bold">Đại hội giới trẻ</h1>
            <p className="mb-5 sm:text-2xl">Đại hội giới trẻ công giáo Việt Nam tại Nhật Bản lần thứ II, ngày 4 và 5 tháng 5, 2023.</p>
            <a
                    href="#"
                    className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-gray-200 hover:text-gray-300 hover:bg-gray-200 ring-1 ring-gray-200 hover:ring-gray-200"
                  >
                    Chi tiết
                    <span className="text-gray-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
          </div>
        </div>
      </div>
      <div className="my-8 sm:flex sm:flex-col sm:items-center">
        <h1 className="text-4xl mb-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
          Bài viết gần đây
        </h1>
        <div className="sm:justify-center sm:rounded-xl carousel carousel-center max-w-md md:max-w-6xl p-4 space-x-4 bg-gradient-to-r from-pink-400 to-blue-400">
          <div className="carousel-item">
            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Sứ điệp của Đức Thánh Cha Phanxcô 2022-2023</h2>
                <p>Sứ điệp của cha, cho các con là những người trẻ, sứ điệp lớn lao mà Giáo hội cưu mang, đó là Chúa Giêsu ...</p>
              </div>
            </div>
          </div> 
          <div className="carousel-item">
            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hướng tới một Hội Thánh hiệp hành</h2>
                <p>Đáp lại lời kêu gọi của Đức Thánh Cha Phanxicô, Hội Thánh Việt Nam tích cực tham gia Thượng Hội Đồng Giám Mục cấp Giáo phận. ...</p>
              </div>
            </div>
          </div> 
          <div className="carousel-item">
            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Toàn cầu hoá</h2>
                <p>Chúng ta đã bước vào thế kỷ XXI, một thế kỷ được mệnh danh là kỷ nguyên của toàn cầu hoá hay còn gọi là thời đại văn minh trí tuệ. ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-2 lg:px-8">
          <div className="mx-auto max-w-3xl pt-8 pb-8 sm:pt-18 sm:pb-18">
            <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
                THƯ NGỎ
                </h1>
                <h4>tháng 11, 2022</h4>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                  Giáo Hội bắt đầu tháng 11 với lễ kính các thánh nam nữ của Thiên Chúa và ngày 02 tháng 11, Giáo Hội đặc biệt cầu nguyện cho các tín hữu đã qua đời, cũng như dành cả tháng 11 để cầu nguyện cho mọi người đã chết. Điều này nói lên xác tín của Hội Thánh về mầu nhiệm các thánh thông công và mầu nhiệm kẻ chết sống lại trong niềm tin vào Đức Kitô Phục Sinh.
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                Chúng ta, những người lữ hành trên dương thế, chúng ta sẽ có ngày chết. Vì thế, Chúa dạy chúng ta hãy dùng của cải chóng qua để mua lấy Nước Trời, mua lấy những của cải không bị mối mọt trên thiên đàng. Chúng ta hãy lợi dụng thời gian trong tháng 11 này để đặc biệt cầu nguyện cho linh hồn tiên nhân, ông bà, cha mẹ, những người thân yêu của chúng ta và tất cả mọi người đã qua đời. Xin Chúa thương ban cho các linh hồn phần thưởng trên thiên đàng. Các linh hồn đang ở trong luyện tội cũng sẽ cầu nguyện cho chúng ta.
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                Vào cuối tháng này, chúng ta cũng sẽ bước vào Mùa Vọng. Xin cho chúng ta biết noi gương Mẹ Maria, chuẩn bị tâm hồn thánh thiện, quảng đại đón Chúa Giêsu vào lòng, và đem Ngài đến thăm viếng mọi người chung quanh chúng ta, để Chúa cũng được mọi người nhận biết, yêu mến và tôn kính.
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                Kính chúc quý cha, qúy tu sĩ nam nữ và tất cả mọi người một tháng 11 bình an, và Mùa Vọng sốt sắng.
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                PVLC
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}
