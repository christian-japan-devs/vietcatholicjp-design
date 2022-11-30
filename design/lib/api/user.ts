

export interface UserProps {
  name: string;
  username: string;
  email: string;
  image: string;
  followers: number;
  verified: boolean;
}

export interface ResultProps {
  _id: string;
  users: UserProps[];
}