import { AxiosResponse } from "axios";
import { TResponseData, http } from "../http";
import { TRegister } from "../../types/User.Type";

class UserService {

  private BASE: string;

  constructor() {
    this.BASE = "/api";
  };

  public async register(values: TRegister): Promise<AxiosResponse<TResponseData>> {
    return await http.post(`${this.BASE}/register`, values);
  };

  public async profile(): Promise<AxiosResponse<TResponseData>> {
    return await http.get(`${this.BASE}/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(`@token`)}`
        }
    });
  }

}

export default UserService;