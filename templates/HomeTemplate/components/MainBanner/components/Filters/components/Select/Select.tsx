import { FC, useEffect, useState, MouseEvent } from "react";

import style from "./Select.module.scss";

type TProps = {
  options: string[];
  initValue: string;
  sendValue: (value: string) => void;
  title: string;
  currentValue: string;
};

export const Select: FC<TProps> = ({
  options,
  initValue,
  sendValue,
  title,
  currentValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

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

  useEffect(() => {
    if (currentValue === "-") setSelectedValue("-");
  }, [currentValue]);

  return (
    <li className={style.select} onClick={handleSelectClick}>
      <p className={style.title}>{title}</p>
      <div
        className={`${style.selectCurrent} ${
          isActive ? style.selectCurrentActive : ""
        }`}
      >
        <span className={style.text}>{selectedValue}</span>
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
