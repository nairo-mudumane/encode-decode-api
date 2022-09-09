export interface IUser {
  username: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

export interface IUserModel extends IUser {}
