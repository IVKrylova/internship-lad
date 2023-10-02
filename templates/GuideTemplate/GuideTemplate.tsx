import { FC, useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { TGuide } from "@types";
import { H1, ButtonCta, ButtonLike, PopupForm, Input } from "@components";
import { useAppSelector, useAppDispatch } from "@servises/hooks";
import { useFormAndValidation } from "@hooks";
import { updateGuideAvatar } from "@servises/slices/guides";
import { NextThunkDispatch } from "@servises/store";
import { updateAvatar } from "@api";

import style from "./GuideTemplate.module.scss";

type TProps = {
  guide: TGuide;
};

export const GuideTemplate: FC<TProps> = ({ guide }) => {
  const router = useRouter();
  const guides = useAppSelector((store) => store.guides.guides);
  const { isValid, handleChange, values, resetForm, errors } =
    useFormAndValidation();
  const dispatch = useAppDispatch() as NextThunkDispatch;

  const [liked, setLiked] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>("");

  const openPopup = () => {
    setIsOpenPopup(true);
    setIsSuccessSubmit(false);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const res = await updateAvatar(guide.id, values.avatar);
    if (res && typeof res === "string") {
      setIsSuccessSubmit(true);
      resetForm();
      dispatch(updateGuideAvatar({ id: guide.id, avatar: res }));
      setFlag(true);
    }
  };

  useEffect(() => {
    if (guide) {
      const guides = localStorage.getItem("guides");
      if (guides !== null) {
        const item: TGuide = JSON.parse(guides).find(
          (el: TGuide) => el.id === guide.id
        );
        if (item && item.liked !== undefined) setLiked(item.liked);
        if (item) setAvatar(item.avatar);
      }
    }
  }, [guide, guides]);

  useEffect(() => {
    if (flag) {
      localStorage.setItem("guides", JSON.stringify(guides));
      const item: TGuide | undefined = guides?.find(
        (el: TGuide) => el.id === guide.id
      );
      if (item) setAvatar(item.avatar);
      setFlag(false);
    }
  }, [flag]);

  return (
    <>
      <ButtonCta
        text="Go Back"
        type="button"
        handleClick={() => router.back()}
        className={style.button}
      />
      <H1
        className={style.title}
        title={`${guide.first_name} ${guide.last_name}`}
      />
      <div className={style.about}>
        <ButtonLike id={guide.id} liked={liked} />
        <Image
          alt={`photo ${guide.first_name} ${guide.last_name}`}
          src={avatar ? avatar : guide.avatar}
          width={300}
          height={300}
          className={style.avatar}
          onClick={openPopup}
          priority
        />
        <p className={style.contact}>
          <span>{`Contact: `}</span>
          <span className={style.accent}>{guide.email}</span>
        </p>
      </div>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eius
        culpa a atque sunt adipisci illo quisquam, ipsum iure ab dolor voluptate
        suscipit dolore esse nam nisi perspiciatis aperiam laborum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Commodi, laboriosam illum
        minima est sunt eum similique repudiandae eaque sed perspiciatis ullam
        iste. Eos facilis quam fugiat obcaecati nostrum ipsam qui. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Ex debitis, voluptate,
        explicabo ullam laudantium obcaecati tempora perspiciatis, possimus
        alias deserunt consectetur praesentium sit eveniet labore! Praesentium
        sint nemo doloribus odio?
      </p>

      <PopupForm
        title="Update Avatar"
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        onSubmit={handleFormSubmit}
        isSuccessSubmit={isSuccessSubmit}
        isValid={isValid}
        message="Your avatar has been updated!"
        buttonText="Update"
      >
        <Input
          label="Link to avatar"
          name="avatar"
          type="url"
          handleChange={handleChange}
          value={values.avatar}
          error={errors.avatar}
          isValid={isValid}
          required={true}
        />
      </PopupForm>
    </>
  );
};
