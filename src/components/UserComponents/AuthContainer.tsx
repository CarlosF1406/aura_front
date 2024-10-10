import { useState } from "react";
import { LoginFormPopup } from "./LoginComponents/LoginForm";
import { RegisterFormPopup } from "./RegisterComponents/RegisterForm";

export function AuthContainer () { 
  const [ loginMode, setLoginMode ] = useState<boolean>(true);
  const openLogin = () => {if (!loginMode) setLoginMode(true)};
  const closeLogin = () => {if (loginMode) setLoginMode(false)};

  return(
    <div className="">
      { loginMode ?
        <>
          <LoginFormPopup changeMode={closeLogin}/>
        </> :
        <>
          <RegisterFormPopup changeMode={openLogin}/>
        </>
      }
    </div>
  )
}