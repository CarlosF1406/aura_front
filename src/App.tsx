import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Avatar } from "@nextui-org/react";
import LoginFormPopup from "./components/UserComponents/LoginComponents/LoginForm";
import RegisterFormPopup from './components/UserComponents/RegisterComponents/RegisterForm';

function App() {
  return (
    <Router>
      <Layout>
        <div className="flex gap-3 items-center">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar name="Junior" />
        </div>
        <Routes>
          <Route path="/" element={<LoginFormPopup />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/register" element={<RegisterFormPopup />} />
          <Route path="/login" element={<LoginFormPopup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
