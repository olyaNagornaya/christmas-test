import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './MenuItem.module.scss';
import cn from "classnames";
import {ReactComponent as Snow} from './img/snow.svg';

interface MenuItemTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string;
    apiKey: string;
    current: string;
    setCurrent: (val: string) => void;
}

const MenuItem: FC<MenuItemTypes> = ({ name, apiKey, current, setCurrent, className, ...restProps }) => {

    const handleChangeCurrent = (val: string) => {
        setCurrent(val);
    }

    return (
      <div className={cn(s.wrapper, className)} onClick={() => handleChangeCurrent(apiKey)}>
          <Snow className={s.snow} />
          <div className={cn(s.text, {
              [s.textCurrent]: apiKey === current,
          })}>{name}</div>
      </div>
  );
};

export default MenuItem;