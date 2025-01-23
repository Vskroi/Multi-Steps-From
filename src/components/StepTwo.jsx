import { useState } from "react";
import { Input } from "./input";
import { Button } from "./Button";
export const StepTwo = ({ setStep }) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setError] = useState({});
  const onSubmit = () => {
    let nextStep = false;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValue.email || formValue.email.length === 0) {
      setError((prev) => ({
        ...prev,
        email: "Мэйл хаягаа оруулна уу",
      }));
      nextStep = false;
    } else if (!formValue.email || !checkEmail.test(formValue.email)) {
      setError((prev) => ({
        ...prev,
        email: "Зөв мэйл хаяг оруулна уу.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
      nextStep = true;
    }
    if (!formValue.phoneNumber || formValue.phoneNumber.length === 0) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу.",
      }));
      nextStep = false;
    } else if (!formValue.phoneNumber || formValue.phoneNumber.length < 8 || formValue.phoneNumber.length > 8 ) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
      nextStep = false;
    } else if (!formValue.phoneNumber || formValue.phoneNumber.length === 8) {
      setError((prev) => ({ ...prev, phoneNumber: "" }));
      nextStep = true;
    }

    if (!formValue.Password || formValue.Password.length === 0) {
      setError((prev) => ({
        ...prev,
        Password: "Нууц үгээ оруулна уу.",
      }));
      nextStep = false;
    } else if (!formValue.Password || formValue.Password.length < 6) {
      setError((prev) => ({
        ...prev,
        Password: "6 оронтой тоо оруулна уу.",
      }));
      nextStep = false;
    } else {
      setError((prev) => ({ ...prev, Password: "" }));
      nextStep = true;
    }
    if (!formValue.confirmPassword || formValue.confirmPassword.length === 0) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж оруулна уу.",
      }));
      nextStep = false;
    } else if (formValue.confirmPassword !== formValue.Password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Таны оруулсан нууц үг таарахгүй байна.",
      }));
      nextStep = false;
      console.log("a");
    } else {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
      nextStep = true;
    }

    if (nextStep) {
      setStep(3);
    }
  };
  const backStep = () => {
    setStep(1);
  };

  const onEmailChange = (e) => {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setFormValue({ ...formValue, email: e.target.value });

    if (checkEmail.test(formValue.email)) {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };
  const onPhoneNumberChange = (e) => {
    setFormValue({ ...formValue, phoneNumber: e.target.value });
   
  };
  const onPasswordChange = (e) => {
    setFormValue({ ...formValue, Password: e.target.value });
  };
  const onconfirmPasswordChange = (e) => {
    setFormValue({ ...formValue, confirmPassword: e.target.value });
  };

  return (
    <>
      <div className="w-[480px] h-[655px] p-8 bg-white  rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start  flex">
          <div className="h-[129px] flex-col justify-start items-start gap-2 flex">
            <img className="w-[60px] h-[60px]" src="main.png" />
            <div className="self-stretch text-[#202124] text-[26px] font-semibold">
              Join Us! 😎
            </div>
            <div className="text-center text-[#8d8d8d] text-lg font-normal">
              Please provide all current information accurately.
            </div>
          </div>
          <div className="w-[416px] h-[228px] flex-col justify-start items-start gap-2  inline-flex mt-[20px]">
            <div className="w-full">
              <Input
                id="email"
                text="Email"
                onChange={onEmailChange}
                type="email"
              />
              {errors.email ? (
                <p className="text-[#e14942]">{errors.email}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full">
              <Input
                type="number"
                id="phoneNumber"
                text="Phone number"
                onChange={onPhoneNumberChange}
              />
              {errors.phoneNumber ? (
                <p className="text-[#e14942]">{errors.phoneNumber}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full">
              <Input
                id="Password"
                type="password"
                text="Password"
                onChange={onPasswordChange}
              />
              {errors.Password ? (
                <p className="text-[#e14942]">{errors.Password}</p>
              ) : (
                <></>
              )}
            </div>

            <div className="w-full">
              <Input
                type="password"
                id="confirmPassword"
                text="Confirm password"
                onChange={onconfirmPasswordChange}
              />
              {errors.confirmPassword ? (
                <p className="text-[#e14942]">{errors.confirmPassword}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[8px]">
          <Button
            onClick={backStep}
            img={<img src="chevron_left.webp" />}
            text="back"
            className="w-[128px] h-11 px-3 py-2.5 bg-white rounded-md border border-slate-300 justify-center items-center gap-1 inline-flex text-[#000]"
          />
          <Button
            onClick={onSubmit}
            text="Continue 2/3"
            className="h-11 w-[280px] px-3 py-2.5 bg-[#121316] rounded-md justify-center items-center gap-1 inline-flex text-[#FFF]"
          />
        </div>
      </div>
    </>
  );
};
