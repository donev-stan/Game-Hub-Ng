export interface IUser {
  id?: string;
  avatar?: string;
  username: string;
  email: string;
  password: string;
  repeatedPassword?: string;
  // lastLogin?: string;
}
