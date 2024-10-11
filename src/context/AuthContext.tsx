import { createContext, useEffect, useState, useReducer } from "react";
import { IAuthAction, IAuthContextType, IAuthState, IAuthProviderProps } from "../interfaces/AuthContext.Interface";
import { setSession } from "../services/jwt";
import { SESSION_KEY } from "../constants/Session";

export const AuthContext = createContext<IAuthContextType>({} as IAuthContextType)

const initialState: IAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const stateReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  const { type, payload } = action;

  switch (type) {

    case "INITIALIZE": {
      const { isAuthenticated, user } = payload;
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        user
      };
    };

    case "LOGIN": {
      const { user } = payload;
      return {
        ...state,
        isAuthenticated: true,
        user
      }
    };

    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    };

    default:
      return state;
  };
};

export const AuthProvider = ({ children } : IAuthProviderProps ) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [authInitialized, setAuthInitialized] = useState<boolean>(false);

  useEffect(() => {
    const initialize = async () => {
      try {

        const [ID_KEY, TOKEN_KEY] = SESSION_KEY;

        const accessID: string | null = await localStorage.getItem(ID_KEY);
        const accessToken: string | null = await localStorage.getItem(TOKEN_KEY);

        if (!accessID || !accessToken) {
          setSession(null);
          dispatch({
            type: "INITIALIZE",
            payload: {
              isInitialized: true,
              isAuthenticated: false,
              user: null
            }
          });
          return;
        }

        await setSession({ id: accessID, token: accessToken });

        dispatch({
          type: "INITIALIZE",
          payload: {
            isInitialized: true,
            isAuthenticated: true,
            user: {
              id: accessID,
              token: accessToken,
            }
          }
        });

        setAuthInitialized(true);

      } catch (error) {

        setSession(null);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isInitialized: true,
            isAuthenticated: false,
            user: null
          }
        });

        setAuthInitialized(true);
      };
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}