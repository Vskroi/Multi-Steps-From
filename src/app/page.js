"use client";

import { StepOne } from "@/components/step1";
import { useState } from "react";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/three";
import { StepFour } from "@/components/StepFour";

export default function Home() {
  const [step, setStep] = useState(1)
  return (
    
      <div className="w-screen h-screen flex-col justify-center items-center inline-flex">
   {step === 1 && < StepOne  setStep={setStep} />}
   {step === 2 && < StepTwo  setStep={setStep} />}
   {step === 3 && < StepThree  setStep={setStep} />}
   {step === 4 && < StepFour setStep={setStep} />}
      </div>
   
  );
}
