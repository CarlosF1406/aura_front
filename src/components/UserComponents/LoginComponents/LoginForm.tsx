import React, { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useNavigate } from "react-router-dom";
import { colors } from '../../../constants/Colors';

const LoginFormPopup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Iniciando sesión con', email, password);
    navigate('/dashboard');
  };

  return (
    <div style={popupStyle}>
      <Card style={{ width: '450px', background: colors.background }}>
        <CardHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3>Iniciar Sesión</h3>
        </CardHeader>
        <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input
            fullWidth
            isClearable
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ lineHeight: 'normal', paddingTop: '10px', paddingBottom: '10px' }}
          />
          <Input
            fullWidth
            isClearable
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ lineHeight: 'normal', paddingTop: '10px', paddingBottom: '10px' }}
          />
        </CardBody>
        <CardFooter style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ButtonGroup>
            <Button onClick={handleLogin} style={{ background: colors.primary, color: colors.white }}>
              Iniciar Sesión
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

const popupStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: colors.gradient,
  padding: '20px',
  boxShadow: `0 4px 8px ${colors.shadow.p30}`,
  borderRadius: '8px',
  zIndex: 1000,
};

export default LoginFormPopup;