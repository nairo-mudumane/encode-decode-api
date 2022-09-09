export interface IUser {
  username: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

export declare class IClassUser {
  constructor(payload?: IUser);
  public checkUSer: (user?: IUser) => boolean;
  public formatUser: (user?: IUser) => IUser;
}
