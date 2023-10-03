import { FC, useState, FormEvent } from "react";

import {
  ButtonCta,
  Banner,
  H2,
  PopupForm,
  Input,
  Checkbox,
  ImageWithHideOnError,
} from "@components";
import { useAppSelector } from "@servises/hooks";
import { useFormAndValidation } from "@hooks";
import { TGuides } from "@types";

import style from "./GuidesBanner.module.scss";

export const GuidesBanner: FC = () => {
  const guides: TGuides | null = useAppSelector((store) => store.guides.guides);
  const { isValid, handleChange, values, resetForm, errors } =
    useFormAndValidation();

  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleClickBecomeGuide = () => {
    setIsOpenPopup(true);
    setIsSuccessSubmit(false);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
    setError("");
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (values.name && values.email) {
      const req = {
        name: values.name,
        email: values.email,
      };
      console.log(req);
      setIsSuccessSubmit(true);
      resetForm();
      setError("");
    } else {
      setError("Fields ara empty");
    }
  };

  return (
    <Banner
      img="/img/guid_banner_1x.png"
      alt="desert image"
      actionId="become-guide"
      src2x="/img/guid_banner_2x.png"
      src3x="/img/guid_banner_3x.png"
      src4x="/img/guid_banner_4x.png"
      classAction={style.classAction}
    >
      <div className={style.info}>
        <p className={style.message}>
          <span>Be referenced on our site,</span>
          <span className={style.accent}>it's 100% free!</span>
        </p>
        <div className={style.action}>
          <ButtonCta
            type="button"
            text="I am a Tourist Guide"
            handleClick={handleClickBecomeGuide}
            className={style.buttonGuide}
          />
          <div className={style.guides}>
            <div className={style.list}>
              {guides?.slice(0, 4).map((el) => {
                return (
                  <div key={el.id} className={style.guide}>
                    <ImageWithHideOnError
                      className={style.avatar}
                      alt={`avatar ${el.first_name} ${el.last_name}`}
                      src={el.avatar}
                      width={52}
                      height={52}
                    />
                  </div>
                );
              })}
            </div>
            <p className={style.count}>
              <span className={style.countAccent}>1000+&nbsp;</span>
              tourist join us
            </p>
          </div>
        </div>
      </div>
      <H2 title="Are you a Tourist Guide in Egypt?" className={style.h2} />

      <PopupForm
        title="Register as a Guide"
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
        onSubmit={handleFormSubmit}
        isSuccessSubmit={isSuccessSubmit}
        isValid={isValid}
        message="Your application has been sent successfully!"
        buttonText="Sign up"
        error={error}
      >
        <Input
          label="Name"
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
          error={errors.name}
          isValid={isValid}
          required={true}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
          error={errors.email}
          isValid={isValid}
          required={true}
        />
        <Checkbox
          label="I agree to the transfer of personal data according to privacy policy and user agreement"
          required={true}
          name="policy"
          handleChange={handleChange}
          error={errors.policy}
          isValid={isValid}
          isPolicy={true}
        />
      </PopupForm>
    </Banner>
  );
};
