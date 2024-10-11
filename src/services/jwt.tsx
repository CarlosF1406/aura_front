import { http } from "./http"
import { TSession } from "../types/User.Type";
import { SESSION_KEY } from "../constants/Session";

/**
 * @param {String} id User identification value.
 * @param {String} token User token value.
 * @param {Object} user User object. Brings attributes from the table. 
 */
export const setSession = async (session: TSession) => {
  try {

    const [ID_KEY, TOKEN_KEY] = SESSION_KEY;

    if (!session?.id || !session?.token) {
      await localStorage.removeItem(ID_KEY);
      await localStorage.removeItem(TOKEN_KEY);
      delete http.defaults.headers.common["Authorization"];

      return;
    }

    const { id, token } = session;

    const strId = typeof id === "number" ? String(id) : id;
    const strToken = typeof token === "number" ? String(token) : token;
  
    await localStorage.setItem(ID_KEY, strId);
    await localStorage.setItem(TOKEN_KEY, strToken);
    http.defaults.headers.common["Authorization"] = `Bearer ${strToken}`;

    return;

  } catch (error) {
    console.error(error);
    return;
  }
}