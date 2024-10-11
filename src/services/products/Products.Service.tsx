import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http";

class ProductService {

  private BASE: string;

  constructor() {
    this.BASE = "/api";
  };

  public async getCart(): Promise<AxiosResponse<TResponseData>> {
    return await http.get(`${this.BASE}/products-cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

  public async emptyCart(): Promise<AxiosResponse<TResponseData>> {
    return await http.delete(`${this.BASE}/products-cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

  public async addProduct(productId: any): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/products-cart`, productId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

  public async deleteProduct(productID: string): Promise<AxiosResponse<TResponseData>> {
    return await http.delete(`${this.BASE}/products-cart/${productID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

  public async increaseProduct(productID: string): Promise<AxiosResponse<TResponseData>> {
    return await http.put(`${this.BASE}/products-cart/${productID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

  public async decreaseProduct(productID: string): Promise<AxiosResponse<TResponseData>> {
    return await http.put(`${this.BASE}/products-carts/${productID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  };

}

export default ProductService;