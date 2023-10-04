import { FC, useEffect } from "react";

import { Card } from "./components";
import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { TGuides, TError } from "@types";
import { getGuides } from "@api";
import { H1 } from "@components";
import { NextThunkDispatch } from "@servises/store";
import { fetchGuides } from "@servises/slices/guides";
import { getGuidesFromLocalStorage } from "@utils";

import style from "./AccountTemplate.module.scss";

export const AccountTemplate: FC = () => {
  const guides: TGuides | null = useAppSelector((store) => store.guides.guides);
  const dispatch = useAppDispatch() as NextThunkDispatch;

  const fetchData = async () => {
    const guides: TGuides | TError = await getGuides();
    if (guides && Array.isArray(guides)) {
      dispatch(fetchGuides(guides));
      localStorage.setItem("guides", JSON.stringify(guides));
    }
  };

  useEffect(() => {
    const data = getGuidesFromLocalStorage();
    if (data) {
      dispatch(fetchGuides(data));
    } else if (!guides || guides.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <section className={style.section}>
      <H1 className={style.title} title="Guides" />
      <ul className={style.list}>
        {guides?.map((el) => {
          return <Card key={el.id} el={el} />;
        })}
      </ul>
    </section>
  );
};
