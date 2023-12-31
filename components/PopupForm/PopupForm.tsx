import { FC, useRef, useEffect, ReactNode, FormEvent } from "react";
import Image from "next/image";

import style from "./PopupForm.module.scss";
import { ButtonCta } from "@components/ButtonCta";

type TProps = {
  isOpenPopup: boolean;
  closePopup: () => void;
  title: string;
  children: ReactNode;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  isSuccessSubmit: boolean;
  isValid: boolean;
  message: string;
  buttonText: string;
  error: string;
};

export const PopupForm: FC<TProps> = ({
  isOpenPopup,
  closePopup,
  title,
  children,
  onSubmit,
  isSuccessSubmit,
  isValid,
  message,
  buttonText,
  error,
}) => {
  const content = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (evt: MouseEvent) => {
    if (!content.current?.contains(evt.target as Node)) {
      closePopup();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closePopup);

    return () => {
      window.removeEventListener("scroll", closePopup);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={`${style.popup} ${isOpenPopup ? style.popupOpened : ""}`}>
      <div className={style.container} ref={content}>
        <button
          type="button"
          aria-label="кнопка закрыть попап"
          onClick={closePopup}
          className={style.buttonClose}
        >
          <Image
            src="/img/icon_close.svg"
            alt="button close"
            width={24}
            height={24}
            className={style.iconClose}
          />
        </button>
        <h3 className={style.title}>{title}</h3>
        {error && <p className={style.error}>{error}</p>}
        {!isSuccessSubmit && (
          <form className={style.form} onSubmit={onSubmit} noValidate>
            {children}
            <ButtonCta
              type="submit"
              text={buttonText}
              handleClick={() => {}}
              disabled={!isValid}
              className={style.buttonCta}
            />
          </form>
        )}
        {isSuccessSubmit && <p className={style.message}>{message}</p>}
      </div>
    </div>
  );
};
