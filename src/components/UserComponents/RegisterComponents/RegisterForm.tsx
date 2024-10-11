import React, { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { colors } from '../../../constants/Colors';
import useLoading from '../../../hooks/useLoading';
import Toaster from '../../../hooks/useToast';
import UserService from '../../../services/user/User.Service';
import { TRegister } from '../../../types/User.Type';

export function RegisterFormPopup ({ changeMode } : { changeMode?: any }) { 
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showErrorToast, showSuccessToast } = Toaster();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const userAPI = new UserService();

  const handleRegister = async () => {
    { !isLoading &&
      startLoading();
      try {
        const payload: TRegister = {
          username: String(username),
          email: String(email),
          password: String(password),
        }
        const { status }: { status: number } = await userAPI.register(payload);
        if ((status===200)) {
          showSuccessToast(`¡Usuario registrado satisfactoriamente!`);
          showSuccessToast(`Por favor, inicia sesión.`);
        } else {
          showErrorToast(`Ocurrió un error al registrar el usuario.`);
        }
      } catch (error: any) {
        showErrorToast(`Ocurrió un error al registrar el usuario.`);
        console.log(error);
      } finally {
        stopLoading();
      }
      }
  };

  const handleLoginRedirect = () => {
    changeMode && changeMode();
  };


  return (
    <div style={popupStyle}>
      <Card style={{ width: '450px', background: colors.background }}>
        <CardHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3 className="font-bold">Registrarse</h3>
        </CardHeader>
        <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Input
            fullWidth
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ lineHeight: 'normal', paddingTop: '10px', paddingBottom: '10px' }}
          />
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
              <Button onClick={handleRegister} style={{ background: colors.primary, color: colors.white }}>
                Registrarse
              </Button>
            </ButtonGroup>
            <p onClick={handleLoginRedirect} style={{ cursor: 'pointer', color: colors.primary, marginTop: '30px', textAlign: 'center' }}>
              ¿Ya tienes una cuenta? Inicia Sesión aquí
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