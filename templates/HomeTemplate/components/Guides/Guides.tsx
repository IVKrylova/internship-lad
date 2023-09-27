import { FC, useEffect, useState } from "react";

import { ButtonCta, H2 } from "@components";
import { useAppSelector, useAppDispatch } from "@servises/hooks";
import { Guid } from "./components";
import { fetchMainGuidesList } from "@servises/slices/mainGuidesList";
import { NextThunkDispatch } from "@servises/store";

import style from "./Guides.module.scss";

export const Guides: FC = () => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides = useAppSelector((store) => store.guides.guides);
  const mainGuidesList = useAppSelector(
    (store) => store.mainGuidesList.mainGuidesList
  );

  const [buttonText, setButtonText] = useState<string>("See All Guides");

  const handleButtonClick = () => {
    if (buttonText === "See All Guides") {
      setButtonText("Hide Guides");
      dispatch(fetchMainGuidesList(guides));
    } else {
      setButtonText("See All Guides");
      dispatch(fetchMainGuidesList(guides.slice(0, 4)));
    }
  };

  useEffect(() => {
    if (guides) dispatch(fetchMainGuidesList(guides.slice(0, 4)));
  }, [guides]);

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
    </section>
  );
};
