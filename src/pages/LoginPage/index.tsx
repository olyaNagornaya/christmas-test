import React from 'react';
import type { FC } from 'react';
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const LoginPage: FC = () => {
  return (
      <div>
        <h1>Страница авторизации</h1>
        <LoginForm />
      </div>
  );
};

export default LoginPage;