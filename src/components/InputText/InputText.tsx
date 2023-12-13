import React, {ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, LegacyRef} from 'react';
import s from './InputText.module.scss';
import cn from "classnames";

interface InputTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    errorText?: string | unknown;
    placeholder?: string;
    type?: 'text' | 'password';
}

const InputText = forwardRef((props: InputTypes, ref: LegacyRef<HTMLInputElement> | undefined) => {
    const {type = 'text', errorText, placeholder, className, ...restProps} = props

    let input = null;
    if (type === 'text') {
        input = (
            <input className={cn(s.input, className, {
                [s.inputError]: errorText,
            })} placeholder={placeholder} ref={ref} {...restProps} />
        )
    } else if (type === 'password') {
        input = <input type="password" className={cn(s.input, className, {
            [s.inputError]: errorText
        })} placeholder={placeholder} {...restProps} />
    }
    return (
        <div>
            {input}
            {typeof errorText === 'string' ? (
                <div className={s.errorMessage}>{errorText}</div>
            ) : null}
        </div>
    );
});

export default InputText;
