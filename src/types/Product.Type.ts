export type TProduct = {
  id: number | string;
  name: string;
  product: number | string;
  price: number;
}

export type TCart = {
  _id: number | string;
  user: string;
  product: number | string;
  name: string;
  price: number | string;
  amount: number;
}