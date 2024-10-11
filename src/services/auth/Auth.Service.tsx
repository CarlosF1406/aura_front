import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http";
import { TLogin } from "../../types/User.Type";

class AuthService {

  private BASE: string;

  constructor() {
    this.BASE = "/api";
  }

  public async login(values: TLogin): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/login`, values);
  }

  public async logout(): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  }

}

export default AuthService;