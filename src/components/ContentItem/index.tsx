import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import type { FC } from 'react';
import cn from "classnames";
import s from './ContentItem.module.scss';
import {ReactComponent as Snowman} from "./img/snowman.svg";

interface ContentItemTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string;
}
const ContentItem: FC<ContentItemTypes> = ({ name, className, ...restProps }) => {
  return (
      <div className={cn(s.wrapper, className)} {...restProps}>
          <Snowman />
          <p>{name}</p>
      </div>
  );
};

export default ContentItem;