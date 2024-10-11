import React, { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { colors } from '../../../constants/Colors';
import useLoading from '../../../hooks/useLoading';
import Toaster from '../../../hooks/useToast';
import AuthService from '../../../services/auth/Auth.Service';
import { TResponseData } from '../../../services/http';
import { TUser } from '../../../types/User.Type';
import useAuthContext from '../../../hooks/useAuthContext';
import { useAppDispatch } from '../../../hooks/useRedux';
import { setSession } from '../../../services/jwt';
import { login } from '../../../features/user/userSlice';

export function LoginFormPopup ({ changeMode } : { changeMode?: any }) { 

  const { dispatch } = useAuthContext()
  const appDispatch = useAppDispatch();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showErrorToast, showSuccessToast } = Toaster();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authAPI = new AuthService();


  const handleLogin = async () => {
    { !isLoading &&
      startLoading();
      try {
        const payload = {
          email: String(email),
          password: String(password)
        }
        const response: TResponseData = await authAPI.login(payload);
        if ((response.status===200)) {
          const user: TUser = response.data;
          const token = response.token;
          const { id } = response.data;
          const USER_ID = id, USER_TOKEN = token;

          dispatch(({
            type:"LOGIN",
            payload: {
              user: { 
                id: USER_ID,
                token: USER_TOKEN
              }
            }
          }));
          await setSession({
            id: USER_ID,
            token: String(USER_TOKEN)
          });

          appDispatch(login(user));

          showSuccessToast(`¡Bienvenid@, ${user.username}!.`);
        } else {
          showErrorToast(`Ocurrió un error al iniciar sesión.`);
        }
      } catch (error: any) {
        showErrorToast(`Ocurrió un error al iniciar sesión.`);
        console.log(error);
      } finally {
        stopLoading();
      }
      }
  } 
  
  const handleRegisterRedirect = () => {
    changeMode && changeMode();
  };

  return (
    <div style={popupStyle}>
      <Card style={{ width: '450px', background: colors.background }}>
        <CardHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3 className="font-bold">Iniciar Sesión</h3>
        </CardHeader>
        <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input
            fullWidth
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ lineHeight: 'normal', paddingTop: '10px', paddingBottom: '10px' }}
          />
          <Input
            fullWidth
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ lineHeight: 'normal', paddingTop: '10px', paddingBottom: '10px' }}
          />
        </CardBody>
        <CardFooter style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ButtonGroup>
              <Button onClick={handleLogin} style={{ background: colors.primary, color: colors.white }}>
                Iniciar Sesión
              </Button>
            </ButtonGroup>
            <p onClick={handleRegisterRedirect} style={{ cursor: 'pointer', color: colors.primary, marginTop: '30px', textAlign: 'center' }}>
              ¿No tienes una cuenta? Regístrate aquí
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

const popupStyle: React.CSSProperties = {
  background: colors.gradient,
  padding: '4px',
  boxShadow: `0 4px 8px ${colors.shadow.p30}`,
  borderRadius: '8px',
  zIndex: 1000,
};
