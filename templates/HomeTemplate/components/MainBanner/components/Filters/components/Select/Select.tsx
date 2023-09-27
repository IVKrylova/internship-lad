import { FC, useEffect, useState, MouseEvent } from "react";

import style from "./Select.module.scss";

type TProps = {
  options: string[];
  initValue: string;
  sendValue: (value: string) => void;
  title: string;
};

export const Select: FC<TProps> = ({
  options,
  initValue,
  sendValue,
  title,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSelectClick = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (evt: MouseEvent<HTMLLIElement>) => {
    if (evt.target instanceof HTMLElement) {
      const childText = evt.target.innerText;
      if (childText) {
        setSelectedValue(childText);
        setIsActive(false);
        sendValue(childText);
      }
    }
  };

  useEffect(() => {
    if (initValue) setSelectedValue(initValue);
  }, [initValue]);
  return (
    <li className={style.select} onClick={handleSelectClick}>
      <p className={style.title}>{title}</p>
      <div
        className={`${style.selectCurrent} ${
          isActive ? style.selectCurrentActive : ""
        }`}
      >
        {selectedValue}
      </div>
      <ul className={`${style.options} ${isActive ? style.optionsActive : ""}`}>
        {options?.map((el, ind) => (
          <li key={ind} onClick={handleItemClick} className={style.item}>
            {el}
          </li>
        ))}
      </ul>
    </li>
  );
};
