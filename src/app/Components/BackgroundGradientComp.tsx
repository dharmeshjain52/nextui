"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";


export function BackgroundGradientComp({
    title,
    description,
    buttontext,
  }: {
    title?:string;
    description?: string;
    buttontext?: string;
  }
) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] h-[20rem]  p-4 sm:p-1 bg-zinc-900">
        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
        <p className="text-base sm:text-xl my-6 text-neutral-200 text-center">
         {title} 
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
          {description}
        </p>
        <div className="flex flex-col h-full w-full items-center justify-end">
        <button className="rounded-full p-4 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800 text-center">
          <Link href={"/"}>
            {buttontext}
          </Link>
        </button>
        </div>
       </div> 
      </BackgroundGradient>
    </div>
  );
}
