"use client";

import { StepOne } from "@/components/stepOne";
import { useState, useEffect  } from "react";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/three";
import { StepFour } from "@/components/StepFour";
export default function Home() {
  const [step, setStep] = useState(1);
  
  if(typeof window !== 'undefined'){

useEffect(() => {
  const storedData = localStorage.getItem("page");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    setStep(parsedData);
  }
}, []);  

useEffect(() => {
  if (step !== 1) {  
    const jsonData = JSON.stringify(step);
    localStorage.setItem("page", jsonData);
  }
}, [step]);
  }
  return (
    <div className="w-screen h-screen flex-col justify-center items-center inline-flex">
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <StepThree setStep={setStep} />}
      {step === 4 && <StepFour setStep={setStep} />}
    </div>
  );
}
