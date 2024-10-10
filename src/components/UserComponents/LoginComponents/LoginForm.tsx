import React, { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useNavigate } from "react-router-dom";
import { colors } from '../../../constants/Colors';

export function LoginFormPopup ({ changeMode } : { changeMode?: any }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Iniciando sesión con', email, password);
    navigate('/dashboard');
  };

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
