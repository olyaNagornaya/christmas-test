import React from 'react';
import type { FC } from 'react';
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import s from './LoginPage.module.scss';
const LoginPage: FC = () => {
  return (
      <div>
        <h1 className={s.title}>Страница авторизации</h1>
        <LoginForm />
      </div>
  );
};

export default LoginPage;