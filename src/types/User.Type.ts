export type TSession = {
  id: string | number | null;
  token: string | number | null;
} | null;

export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  fullName: string;
  email: string;
  password: string;
}