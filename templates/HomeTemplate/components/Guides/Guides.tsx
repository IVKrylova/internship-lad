import { FC, useEffect, useState } from "react";

import { ButtonCta, H2 } from "@components";
import { useAppSelector, useAppDispatch } from "@servises/hooks";
import { Guid } from "./components";
import { fetchMainGuidesList } from "@servises/slices/mainGuidesList";
import { NextThunkDispatch } from "@servises/store";
import { fetchGuides } from "@servises/slices/guides";
import { TGuides } from "@types";

import style from "./Guides.module.scss";

export const Guides: FC = () => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides: TGuides | null = useAppSelector((store) => store.guides.guides);
  const mainGuidesList: TGuides | null = useAppSelector(
    (store) => store.mainGuidesList.mainGuidesList
  );

  const [buttonText, setButtonText] = useState<string>("See All Guides");

  const handleButtonClick = () => {
    buttonText === "See All Guides"
      ? dispatch(fetchMainGuidesList(guides))
      : dispatch(fetchMainGuidesList(guides?.slice(0, 4)));
  };

  useEffect(() => {
    if (guides) dispatch(fetchMainGuidesList(guides.slice(0, 4)));
  }, [guides]);

  useEffect(() => {
    mainGuidesList?.length !== guides?.length
      ? setButtonText("See All Guides")
      : setButtonText("Hide Guides");
  }, [mainGuidesList]);

  useEffect(() => {
    // Фейковое API не предоставляет возможности сохранять обновленные аватары
    // на сервере, поэтому при обновлении аватара массив гидов сохраняется
    // в localStorage. При выходе из аккаунта localStorage очищается.
    // При первой загрузке страницы проверяется, есть ли данные в localStorage,
    // и если есть, массив гидов сохраняется в store из localStorage.
    // Это нужно, чтобы корректо отображать данные при переходе из аккаунта
    // на главную страницу
    const data = localStorage.getItem("guides");
    if (data !== null) {
      const arr = JSON.parse(data);
      if (
        arr.length > 0 &&
        "id" in arr[0] &&
        "email" in arr[0] &&
        "first_name" in arr[0] &&
        "last_name" in arr[0] &&
        "avatar" in arr[0] &&
        "liked" in arr[0]
      ) {
        dispatch(fetchGuides(arr));
      }
    }
  }, []);

  return (
    <section className={style.section} id="guides">
      <div className={style.header}>
        <H2 title="Guides for you!" />
        <ButtonCta
          type="button"
          text={buttonText}
          handleClick={handleButtonClick}
          className={style.button}
        />
      </div>
      <ul className={style.list}>
        {mainGuidesList?.map((el) => {
          return <Guid key={el.id} guid={el} />;
        })}
      </ul>
      {mainGuidesList?.length === 0 && (
        <p className={style.message}>Nothing was found</p>
      )}
    </section>
  );
};
