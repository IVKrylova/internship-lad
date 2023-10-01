import { FC, useEffect } from "react";

import { Card } from "./components";
import { useAppDispatch, useAppSelector } from "@servises/hooks";
import { TGuides } from "@types";

import style from "./AccountTemplate.module.scss";
import { H1 } from "@components";
import { NextThunkDispatch } from "@servises/store";
import { fetchGuides } from "@servises/slices/guides";

export const AccountTemplate: FC = () => {
  const guides: TGuides = useAppSelector((store) => store.guides.guides);
  const dispatch = useAppDispatch() as NextThunkDispatch;

  useEffect(() => {
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
