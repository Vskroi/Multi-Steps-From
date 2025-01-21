"use client";

import { StepOne } from "@/components/step1";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1)
  return (
    
      <div className="w-screen h-screen flex-col justify-center items-center inline-flex">
   {step === 1 ? < StepOne  setStep={setStep} />: <></>}
      </div>
   
  );
}
