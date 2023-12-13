import React, {useContext, useState} from 'react';
import s from "./LoginForm.module.scss";
import cn from "classnames";
import Button from "../../Button/Button";
import {useForm} from "react-hook-form";
import InputText from "../../InputText/InputText";
import {Link} from "react-router-dom";
import {REGEXP_EMAIL, REGEXP_PASSWORD, VALIDATE_MESSAGE} from "../../../utils/constants";
import CryptoJS from 'crypto-js';
import {AppContext} from "../../App/context";

interface UserDataTypes {
email: string;
password: string;
}

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {isAuth, setIsAuth} = useContext(AppContext);
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const onSubmit = (data: any) => {
        setIsLoading(true);

        setTimeout(() => {
            const email = data.email as UserDataTypes['email'];
            const password = data.password as UserDataTypes['password'];
            const cryptoMail = CryptoJS.enc.Utf8.parse(email);
            const options = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 };
            const encrypted = CryptoJS.AES.encrypt(cryptoMail, password, options);
            const encryptedString = encrypted.toString();

            localStorage.setItem('jwt', encryptedString);
            if (!isAuth && setIsAuth) {
                setIsAuth(true);
            }
            setIsLoading(false);
        }, 3000);
    }

    const emailRegister = register('email', {
        required: VALIDATE_MESSAGE.requiredMessage,
        pattern: {
            value: REGEXP_EMAIL,
            message: VALIDATE_MESSAGE.emailMessage
        }
    });

    const passwordRegister = register('password', {
        required: VALIDATE_MESSAGE.requiredMessage,
        pattern: {
            value: REGEXP_PASSWORD,
            message: VALIDATE_MESSAGE.passwordMessage
        }
    });

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={s.title}>Вход</h3>
            <InputText
                {...emailRegister}
                placeholder="Ваш email"
                errorText={errors.email?.message}
            />
            <InputText
                {...passwordRegister}
                placeholder="Ваш пароль"
                errorText={errors.password?.message}
                // type="password"
            />
            <Link
                to="*"
                className={cn(s.description, s.resetPassword)}
            >Восстановить пароль</Link>
            <Button isLoading={isLoading}>Войти</Button>
        </form>
    );
};

export default LoginForm;
