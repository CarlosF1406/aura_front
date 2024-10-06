export type TProduct = {
  id: number | string;
  name: string;
  cost: number;
}

export type TCart = {
  productID: number | string;
  amount: number;
}