import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http";
import { TLogin } from "../../types/User.Type";

class AuthService {

  private BASE: string;

  constructor() {
    this.BASE = "/auth";
  }

  public async login(values: TLogin): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/authenticate`, values);
  }

  public async restore(): Promise<AxiosResponse<TResponseData>>{
    return await http.get(`${this.BASE}/profile`, {
      headers: {
      Authorization: `Bearer ${localStorage.getItem(`@token`)}`
      }
    })
  }

  public async register(values: unknown): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/register`, values);
  }

  public async profile(): Promise<AxiosResponse<TResponseData>> {
    return await http.get(`${this.BASE}/profile`);
  }

  public updateProfile(values: unknown,userId: number): Promise<AxiosResponse<TResponseData>> {
    return http.put(`${this.BASE}/users/${userId}`, values, {
      headers: {
      Authorization: `Bearer ${localStorage.getItem(`@token`)}`
      }
    });
  }
}

export default AuthService;