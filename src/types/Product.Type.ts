import { TUser } from "./User.Type";

export type TProduct = {
  _id?: number | string;
  name?: string;
  inCart?: boolean;
  price?: number | string;
}

export type TCart = {
  _id?: number | string;
  user?: TUser;
  product?: number | string;
  name?: string;
  price?: number | string;
  amount?: number | string;
}