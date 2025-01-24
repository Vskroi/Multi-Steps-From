import { useState , useEffect } from "react";
import { Input } from "./input";
import { CardHeader } from "./cardHeader";

import { motion } from "framer-motion";

export const StepOne = ({ setStep }, ) => {

  const [formValue, setFormValue] = useState({

  });
  const [errors, setError] = useState({}) 

  useEffect(() => {
    const storedData = localStorage.getItem("stepOne");
    if (storedData) {
      const parsedData = JSON.parse( storedData);
      setFormValue(parsedData);
    }
  }, []);

  
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
    const formData = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      userName: formValue.userName
    };
    const jsonData = JSON.stringify(formData);
    localStorage.setItem("stepOne", jsonData);
    console.log("Form Data (JSON):", jsonData);


    if (nextStep) {
     
      setStep(2);
    }

  };


  const onFirstNameChange = (e) => {
    setFormValue({ ...formValue, firstName: e.target.value });
  
      setError((prev) => ({
        ...prev,
        firstName: "",
      }));
   
  };
  const onLastNameChange = (e) => {
    setFormValue({ ...formValue, lastName: e.target.value });

      setError((prev) => ({
        ...prev,
        lastName: "",
      }));
  
  };
  const onUserNameChange = (e) => {
    setFormValue({ ...formValue, userName: e.target.value });

      setError((prev) => ({
        ...prev,
        userName: "",
      }));
  };
  const transition = {
    duration: 0.8,
  
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <>
      < motion.div  animate={{ x: [0, -20, 0] }} transition={transition} className="w-[480px] h-[655px] p-8 bg-white  rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start  flex">
         <CardHeader />
          <div className="w-[416px] h-[228px] flex-col justify-start items-start gap-3 inline-flex mt-10">
            <Input
              id="firstName"
              text="First Name"
              onChange={onFirstNameChange}
              min="2007-1-22"
              value={formValue.firstName || ""}
              
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
            value={formValue.lastName || ""}
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
            value={formValue.userName || ""}
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
      </motion.div>
    </>
  );
};
