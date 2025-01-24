import { useState } from "react";
import { Input } from "./input";
import { Button } from "./Button";
import next from "next";
export const StepThree = ({ setStep }) => {
  const [formValue, setFormValue] = useState({ profilePicture: null });
  const [errors, setError] = useState({});

  const onSubmit = () => {
    let nextStep = false;
    const date = formValue.date;
    const curDate = new Date();
const year = curDate.getFullYear()
const month = curDate.getMonth()
const day = curDate.getDate()
const minDate = [year-18, month+1, day ].join('-')
const maxDate = [year, month+1, day ].join('-')
console.log(minDate)

  
    console.log(date);

    if (!formValue.date) {
      setError((prev) => ({
        ...prev,
        date: "Төрсөн өдрөө оруулна уу.",
      }));
      nextStep = false;
    }else if (date > maxDate){
      setError((prev) => ({
        ...prev,
        date: "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой.",
      }));
      nextStep = false;
    }
    else if (date > minDate) {
      setError((prev) => ({
        ...prev,
        date: "Та 18 ба түүнээс дээш настай байх ёстой.",
      }));
      nextStep = false;
   
    }
     else {
      setError((prev) => ({ ...prev, date: "" }));
      nextStep = true;
    }
  

  if(formValue.profilePicture === null){
    setError((prev) => ({...prev , profileImage: 'Профайл зурагаа оруулна уу'}));
    nextStep = false
  }
  else{
    setError((prev) => ({...prev , profileImage: ''}));
    nextStep = true;
  }
  if (nextStep) {
    setStep(4);
  }
};
  const backStep = () => {
    setStep(2);
  };

  const ondateChange = (e) =>{
    setFormValue({ ...formValue, date: e.target.value });
    
  }
  const imageOnchange = (e) => {
   const file =  e.target.files[0] 
    var reader = new FileReader ();
reader.onloadend = function () {
setFormValue((prev) => ({ ...prev, profilePicture: reader.result }));
}
reader.readAsDataURL(file);
  };

  const close = () => {
    setFormValue({ ...formValue, profilePicture: null })
  
  }
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
          <div className="w-[416px] h-[358px] flex-col justify-start items-start gap-3 inline-flex mt-10 ">
            <Input
              id="date"
              text="Date of birth"
              onChange={ondateChange}
              type="date"
        
            />
            {errors.date ? (
              <p className="text-[#e14942]">{errors.date}</p>
            ) : (
              <></>
            )}
            <label>
              Profile image <span className="text-[#e14942]">*</span>{" "}
            </label>

            
              {" "}
             
            
              {formValue.profilePicture ? (
                <div className="relative w-full h-[230px] flex-col justify-center items-center inline-flex h-[180px] w-[416px]  bg-[#7e7e7f]/5 rounded-lg flex-col justify-center items-center gap-2 inline-flex overflow-hidden">
                <img
              
                  src={formValue.profilePicture }
                />
  <button
    onClick={close} 
    className="absolute top-2 right-2 h-6 w-6 p-1.5 bg-[#202124] rounded-full flex justify-center items-center z-10"
  >
    <img src="close.png" className="h-full w-full object-contain" alt="Close" />
  </button>
                </div>
              ) : 
                (
                <label
              htmlFor="files"
              className="relative w-full h-[230px] flex-col justify-center items-center inline-flex h-[180px] w-[416px]  bg-[#7e7e7f]/5 rounded-lg flex-col justify-center items-center gap-2 inline-flex overflow-hidden"
            >
                  <input
                id="files"
                onChange={imageOnchange}
                type="file"
                className="invisible"
                name="profileImage"
                accept="image/*"
              />
                  <img
                  className="h-[32px] w-[32px] p-2 bg-white rounded-full justify-start items-center gap-2.5 inline-flex"
                  src="image-min.webp"
                />
                <p>Add image</p>
                
                </label>
              )}
              
            
          </div>
          {errors.profileImage ? (
              <p className="text-[#e14942]">{errors.profileImage}</p>
            ) : (
              <></>
            )}
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
            text="Continue 3/3"
            className="h-11 w-[280px] px-3 py-2.5 bg-[#121316] rounded-md justify-center items-center gap-1 inline-flex text-[#FFF]"
          />
        </div>
      </div>
    </>
  );
};
