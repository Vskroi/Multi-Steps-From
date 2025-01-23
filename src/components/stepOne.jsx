import { useState } from "react";
import { Input } from "./input";
export const StepOne = ({ setStep }) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setError] = useState({}) 

  const onSubmit = () => {
    let nextStep = false;



    if (!formValue.firstName || formValue.firstName.length === 0) {
      setError((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу.",
      }));
      nextStep = false;
    } else {
      nextStep = true;
    }
    if (!formValue.lastName || formValue.lastName.length === 0) {
      setError((prev) => ({
        ...prev,
        lastName: "Овгоо оруулна уу..",
      }));
      nextStep = false;
    } else {
      nextStep = true;
    }
    if (!formValue.userName || formValue.userName.length === 0) {
      setError((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу.",
      }));
      nextStep = false;
    } else {
      nextStep = true;
    }
    const data  = [ formValue.firstName,  formValue.lastName,  formValue.userName]
   JSON.stringify(data)

    if (nextStep) {
      setStep(2);
    }
  };


  const onFirstNameChange = (e) => {
    setFormValue({ ...formValue, firstName: e.target.value });
    if (!formValue.firstName || !formValue.firstName.length === 0) {
      setError((prev) => ({
        ...prev,
        firstName: "",
      }));
    }
  };
  const onLastNameChange = (e) => {
    setFormValue({ ...formValue, lastName: e.target.value });
    if (!formValue.lastName || !formValue.lastName.length === 0) {
      setError((prev) => ({
        ...prev,
        lastName: "",
      }));
    }
  };
  const onUserNameChange = (e) => {
    setFormValue({ ...formValue, userName: e.target.value });
    if (!formValue.userName || !formValue.userName.length === 0) {
      setError((prev) => ({
        ...prev,
        userName: "",
      }));
     
    }
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
          <div className="w-[416px] h-[228px] flex-col justify-start items-start gap-3 inline-flex mt-10">
            <Input
              id="firstName"
              text="First Name"
              onChange={onFirstNameChange}
              min="2007-1-22"
             
              
            />
            {errors.firstName ? (
              <p className="text-[#e14942]">{errors.firstName}</p>
            ) : (
              <></>
            )}
            <Input 
            id="userName" 
            text="Last Name" 
            onChange={onLastNameChange}
           
            />
            {errors.lastName ? (
              <p className="text-[#e14942]">{errors.lastName}</p>
            ) : (
              <></>
            )}
            <Input 
            id="userName" 
            text="Username" 
            onChange={onUserNameChange} 
        
            />
            {errors.userName ? (
              <p className="text-[#e14942]">{errors.userName}</p>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button
          className="h-11 w-full px-3 py-2.5 bg-[#121316] rounded-md justify-center items-center gap-1 inline-flex text-[#FFF]"
          onClick={onSubmit}
        >
          Continue 1/3
        </button>
      </div>
    </>
  );
};
