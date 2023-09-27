import { FC } from "react";

import { Select } from "./components";

import style from "./Filters.module.scss";

export const Filters: FC = () => {
  const selectGender = (val: string) => {
    console.log(val);
  };

  const selectAge = (val: string) => {
    console.log(val);
  };

  const selectLang = (val: string) => {
    console.log(val);
  };

  const selectLacalisation = (val: string) => {
    console.log(val);
  };

  return (
    <ul className={style.filters}>
      <Select
        options={["1", "2", "3"]}
        initValue={"1"}
        sendValue={selectGender}
        title="Gender"
      />
      <Select
        options={["1", "2", "3"]}
        initValue={"1"}
        sendValue={selectAge}
        title="Age"
      />
      <Select
        options={["1", "2", "3"]}
        initValue={"1"}
        sendValue={selectLang}
        title="Language"
      />
      <Select
        options={["1", "2", "3"]}
        initValue={"1"}
        sendValue={selectLacalisation}
        title="Lacalisation"
      />
    </ul>
  );
};
