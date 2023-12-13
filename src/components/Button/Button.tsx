import s from './Button.module.scss';
import cn from 'classnames';
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {Link} from "react-router-dom";
import {Path} from "@remix-run/router/history";
import Spinner from "../Spiner/Spiner";

interface ButtonTypes extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    look?: 'primary' | 'secondary',
    href?: string | Partial<Path>;
    linkState?: unknown;
    isLoading?: boolean;

}

const Button = ({look = 'primary', children, onClick, href, className, linkState, isLoading, ...restProps}: ButtonTypes) => {
    if (href) {
        return (
            <Link to={href} className={cn(s.button, className, {
                [s.primary]: look === 'primary',
                [s.secondary]: look === 'secondary',
            })} state={linkState}>
                {isLoading ? <Spinner /> : children}
            </Link>
        )
    }

    return (
        <button className={cn(s.button, className, {
            [s.primary]: look === 'primary',
            [s.secondary]: look === 'secondary',
        })} onClick={onClick} {...restProps}>
            {isLoading ? <Spinner /> : children}
        </button>
    )
};

export default Button;
