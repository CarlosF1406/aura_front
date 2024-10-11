import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http";
import { TRegister } from "../../types/User.Type";

class UserService {

  private BASE: string;

  constructor() {
    this.BASE = "users";
  };


  public async register(values: TRegister): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}`, values);
  };


  public updateProfile(values: unknown,userId: number): Promise<AxiosResponse<TResponseData>> {
    return http.put(`${this.BASE}/${userId}`, values, {
      headers: {
      Authorization: `Bearer ${localStorage.getItem(`@token`)}`
      }
    });
  }

  public updateProfileImage(values: unknown): Promise<AxiosResponse<TResponseData>> {
    return http.post(`${this.BASE}/profile/pic`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  }

}

export default UserService;