export type TSession = {
  id: string | number | null;
  username?: string;
  email?: string;
  token: string | number | null;
} | null;

export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  username: string;
  email: string;
  password: string;
}

export type TUser = {
  _id?: string;
  username?: string;
}