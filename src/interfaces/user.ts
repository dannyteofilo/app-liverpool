export interface UserAuthData {
    user: {
      name: string;
      email: string;
      role: string;
      status: boolean;
      uid: string;
    };
    token: string;
  }