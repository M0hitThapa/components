'use client'
import { motion } from "motion/react";
import { SVG } from "./svg-animation";

export const SvgLinesAnimation = () => {
  return (
    <div className="flex w-full items-center justify-between  max-w-2xl">
      <div className="flex flex-col justify-between gap-16">
        <div className="relative text-sm  ">
          First Line
          <FirstLineSvg className="absolute left-32 top-1/2 " />
        </div>

        {/*<div className="relative text-sm ">
          Second Line
          <SecondLineSvg className="absolute left-24 top-1/2 " />
        </div>

        <div className="relative text-sm ">
          Third Line
          <ThirdLineSvg className="absolute bottom-1/2 left-32" />
        </div>*/}
      </div>
      <div className="size-20 rounded-sm bg-neutral-100 relative z-20 -translate-x-2 p-0.5 overflow-hidden">
        <div  className="w-full h-full relative rounded-[3px] bg-white z-20 flex items-center justify-center">
          <SVG />
        </div>
        {/*<div className="absolute h-full w-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] animate-spin scale-[1.4]  "></div>
        <div className="absolute h-full w-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-rose-500)_20%,transparent_30%)] animate-spin scale-[1.4]  [animation-delay:0.4s]"></div>*/}

      </div>
    </div>
  );
};

const FirstLineSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="500"
      height="50"
      viewBox="0 0 500 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1H499V50"
        stroke="url(#path-one-gradient)"
        strokeWidth="2"
      />

      <defs>
        <motion.linearGradient
          id="path-one-gradient"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1:"0%",

            x2:"10%"
          }}
          animate={{
            x1: "90%",
            x2:"100%"
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease:"linear"

          }}

        >
          <stop offset="0" stopColor="var(--color-neutral-300)" />
          <stop offset="0.33" stopColor="red" />
          <stop offset="0.66" stopColor="red" />
          <stop offset="1" stopColor="var(--color-neutral-300)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const SecondLineSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="500"
      height="2"
      viewBox="0 0 500 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H500" stroke="#767676" strokeWidth="1" />
    </svg>
  );
};

const ThirdLineSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="500"
      height="50"
      viewBox="0 0 500 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 49H499V0" stroke="#767676" strokeWidth="1" />
    </svg>
  );
};
