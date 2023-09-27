import { FC, useEffect, useState } from "react";

import { Select } from "./components";
import { useAppSelector, useAppDispatch } from "@servises/hooks";
import { fetchMainGuidesList } from "@servises/slices/mainGuidesList";
import { NextThunkDispatch } from "@servises/store";

import style from "./Filters.module.scss";

export const Filters: FC = () => {
  const dispatch = useAppDispatch() as NextThunkDispatch;
  const guides = useAppSelector((store) => store.guides.guides);
  const mainGuidesList = useAppSelector(
    (store) => store.mainGuidesList.mainGuidesList
  );

  const [optionsId, setOptionsId] = useState<Array<string>>([]);
  const [optionsEmail, setOptionsEmail] = useState<Array<string>>([]);
  const [optionsFirstName, setOptionsFirstName] = useState<Array<string>>([]);
  const [optionsLasttName, setOptionsLastName] = useState<Array<string>>([]);
  const [valueId, setValueId] = useState<string>("-");
  const [valueEmail, setValueEmail] = useState<string>("-");
  const [valueFirstName, setValueFirstName] = useState<string>("-");
  const [valueLastName, setValueLastName] = useState<string>("-");

  const selectId = (val: string) => {
    setValueId(val);
  };

  const selectEmail = (val: string) => {
    setValueEmail(val);
  };

  const selectFirstName = (val: string) => {
    setValueFirstName(val);
  };

  const selectLastName = (val: string) => {
    setValueLastName(val);
  };

  useEffect(() => {
    if (guides) {
      const idArr = guides.map((el) => `from ${el.id}`);
      setOptionsId(idArr);

      const emailArr = guides.map((el) => el.email);
      setOptionsEmail(emailArr);

      const firstNameArr = guides.map((el) => el.first_name);
      setOptionsFirstName(firstNameArr);

      const lastNameArr = guides.map((el) => el.last_name);
      setOptionsLastName(lastNameArr);
    }
  }, [guides]);

  useEffect(() => {
    if (
      guides &&
      (valueEmail !== "-" ||
        valueFirstName !== "-" ||
        valueId !== "-" ||
        valueLastName !== "-")
    ) {
      const arrWithEmail =
        valueEmail !== "-"
          ? guides.filter((el) => el.email === valueEmail)
          : structuredClone(guides);

      const arrWithFirstName =
        valueFirstName !== "-"
          ? arrWithEmail.filter((el) => el.first_name === valueFirstName)
          : structuredClone(arrWithEmail);

      const arrWithLasttName =
        valueLastName !== "-"
          ? arrWithFirstName.filter((el) => el.last_name === valueLastName)
          : structuredClone(arrWithFirstName);

      const res =
        valueId !== "-"
          ? arrWithLasttName.filter((el) => el.id >= Number(valueId.slice(5)))
          : arrWithLasttName;

      dispatch(fetchMainGuidesList(res));
    }
  }, [valueEmail, valueFirstName, valueId, valueLastName]);

  useEffect(() => {
    if (guides?.length === mainGuidesList?.length) {
      setValueEmail("-");
      setValueFirstName("-");
      setValueId("-");
      setValueLastName("-");
    }
  }, [guides, mainGuidesList]);

  return (
    <ul className={style.filters}>
      <Select
        options={optionsId}
        initValue="-"
        sendValue={selectId}
        title="Id"
        currentValue={valueId}
      />
      <Select
        options={optionsEmail}
        initValue="-"
        sendValue={selectEmail}
        title="Email"
        currentValue={valueEmail}
      />
      <Select
        options={optionsFirstName}
        initValue="-"
        sendValue={selectFirstName}
        title="First Name"
        currentValue={valueFirstName}
      />
      <Select
        options={optionsLasttName}
        initValue="-"
        sendValue={selectLastName}
        title="Last Name"
        currentValue={valueLastName}
      />
    </ul>
  );
};
