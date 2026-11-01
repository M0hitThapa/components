"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const FeedbackComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {!open ? (
          <motion.button
            key="button"
            layoutId="feedback-form"
            onClick={() => setOpen(true)}
            className="bg-white text-neutral-800 px-4 py-2 rounded-md font-medium border border-neutral-100 cursor-pointer"
          >
            <motion.p layoutId="position">Feedback</motion.p>
          </motion.button>
        ) : (
          <motion.div
            key="form"
            ref={ref}
            layoutId="feedback-form"
            className="bg-neutral-100 p-1 rounded-lg"
          >
            <div className="relative border border-neutral-200 rounded-sm bg-white overflow-hidden">
              <textarea
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-36 w-90  resize-none block focus:outline-none p-2"
              />
              {!value && (
                <motion.p
                  layoutId="position"
                  className="pointer-events-none absolute left-2 top-2 text-neutral-500"
                >
                  Feedback
                </motion.p>
              )}
              <div className="relative">
                <SvgLine className="block" />

                <div className="absolute left-0 top-1/2 h-2 w-1 -translate-x-px -translate-y-1/2 rounded-r-full border border-l-0 border-neutral-200 bg-neutral-100" />

                <div className="absolute right-0 top-1/2 h-2 w-1 translate-x-px -translate-y-1/2 rounded-l-full border border-r-0 border-neutral-200 bg-neutral-100" />
              </div>

              <div className="py-2.5 flex items-center justify-end px-2">
                <button className="px-2  py-1 rounded-sm bg-linear-to-b shadow-[inset_0_0_1px_1px_#ffffff14,0_1px_1.5px_#00000052,0_0_0_0.5px_#1a94ff] from-blue-400 to-blue-500 text-white text-xs text-shadow-md inset-shadow-white font-semibold shadow-[0px 0px 2px 2px,#000000 ]">
                  Send feedback
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SvgLine = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="388"
      height="1"
      viewBox="0 0 388 1"

      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.5H0.994872M388 0.5H387.005M4.97436 0.5H6.9641M10.9436 0.5H12.9333M16.9128 0.5H18.9026M22.8821 0.5H24.8718M28.8513 0.5H30.841M34.8205 0.5H36.8103M40.7897 0.5H42.7795M46.759 0.5H48.7487M52.7282 0.5H54.718M58.6974 0.5H60.6872M64.6667 0.5H66.6564M70.6359 0.5H72.6256M76.6051 0.5H78.5949M82.5744 0.5H84.5641M88.5436 0.5H90.5333M94.5128 0.5H96.5026M100.482 0.5H102.472M106.451 0.5H108.441M112.421 0.5H114.41M118.39 0.5H120.379M124.359 0.5H126.349M130.328 0.5H132.318M136.297 0.5H138.287M142.267 0.5H144.256M148.236 0.5H150.226M154.205 0.5H156.195M160.174 0.5H162.164M166.144 0.5H168.133M172.113 0.5H174.103M178.082 0.5H180.072M184.051 0.5H186.041M190.021 0.5H192.01M195.99 0.5H197.98M201.959 0.5H203.949M207.928 0.5H209.918M213.898 0.5H215.887M219.867 0.5H221.857M225.836 0.5H227.826M231.805 0.5H233.795M237.774 0.5H239.764M243.744 0.5H245.733M249.713 0.5H251.703M255.682 0.5H257.672M261.651 0.5H263.641M267.621 0.5H269.61M273.59 0.5H275.58M279.559 0.5H281.549M285.528 0.5H287.518M291.498 0.5H293.487M297.467 0.5H299.457M303.436 0.5H305.426M309.405 0.5H311.395M315.375 0.5H317.364M321.344 0.5H323.334M327.313 0.5H329.303M333.282 0.5H335.272M339.252 0.5H341.241M345.221 0.5H347.211M351.19 0.5H353.18M357.159 0.5H359.149M363.128 0.5H365.118M369.098 0.5H371.087M375.067 0.5H377.057M381.036 0.5H383.026"
        stroke="#d4d4d4"
      />
    </svg>
  );
};
