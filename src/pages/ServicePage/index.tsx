import React, {useEffect, useState} from 'react';
import type { FC } from 'react';
import {useGetDataPage} from "../../hooks/useGetDataPage";
import Spinner from "../../components/Spiner/Spiner";
import s from './ServicePage.module.scss';
import MenuItem from "../../components/MenuItem";
import ContentItem from "../../components/ContentItem";
import InputText from "../../components/InputText/InputText";
import {KeyNameChildrenTypes} from "./types";
import {getChildData} from "../../utils/utils";
import Sort from "../../components/Sort";
import {useSearch} from "../../hooks/useSearch";
const ServicePage: FC = () => {
    const { dataPage, isLoading } = useGetDataPage();
    const [currentLink, setCurrentLink] = useState('0');
    const [currentContent, setCurrentContent] = useState<KeyNameChildrenTypes[] | []>([]);
    const { inputValue, onChangeSearch } = useSearch({
        dataPage,
        currentLink,
        setCurrentContent
    });

    useEffect(() => {
        setCurrentContent(getChildData(dataPage, currentLink));

    }, [currentLink, dataPage]);

    return (
      <div className="container">
        <h1 className={s.head}>Наш продукт</h1>
          <Sort contentChild={currentContent} setContentChild={setCurrentContent} />
          <InputText className={s.input} placeholder="Поиск по категории" value={inputValue} onChange={onChangeSearch} />
          {isLoading ? (
              <div className={s.spinner}>
                <Spinner />
              </div>
              ) : (
                 <div className={s.wrapper}>
                     <div className={s.sidebar}>
                         {dataPage.map(({ name, key }) => (
                             <MenuItem key={key} name={name} current={currentLink} apiKey={key} setCurrent={setCurrentLink} />
                         ))}
                     </div>
                     <div className={s.content}>
                         {currentContent.length === 0 ? (
                             <h3>Раздел пока что пуст. Приходите позже!</h3>
                         ) : (
                             <div>
                                 {currentContent.map(({ name, key }) => (
                                     <ContentItem name={name} key={key} />
                                 ))}

                             </div>
                         )}
                     </div>
                 </div>
              )}

      </div>
  );
};

export default ServicePage;