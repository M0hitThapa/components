

"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader } from "lucide-react";

const TITLE = "Feedback";
const SPRING = { type: "spring" as const, duration: 0.4, bounce: 0 };

const WIDTH = 400;
const HEIGHT = 200;

export const FeedbackComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useClickOutside(ref, () => setOpen(false));

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const handleOpen = () => {

    clearTimers();
    setSubmitted(false);
    setIsLoading(false);
    setValue("");
    setOpen(true);
  };

  const handleSubmit = () => {
    if (isLoading || !value.trim()) return;
    setIsLoading(true);

    timers.current.push(
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);

        timers.current.push(setTimeout(() => setOpen(false), 1500));
      }, 1500)
    );
  };

  return (
    <div className="flex min-h-75 w-full items-center justify-center">

      <div className="relative">

        <motion.button
          layoutId={`${TITLE}-wrapper`}
          onClick={handleOpen}
          style={{ borderRadius: 8 }}
          className="flex h-9 items-center border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-800 outline-none cursor-pointer"
        >
          <motion.span layoutId={`${TITLE}-title`} className="whitespace-nowrap">
            {TITLE}
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={ref}
              layoutId={`${TITLE}-wrapper`}
              style={{
                borderRadius: 10,
                width: WIDTH,
                height: HEIGHT,

                marginLeft: -WIDTH / 2,
                marginTop: -HEIGHT / 2,
              }}
              className="absolute left-1/2 top-1/2 z-50 w-107.5 h-50 overflow-hidden bg-neutral-100 p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.04)] outline-none"
            >

              <motion.span
                aria-hidden
                layoutId={`${TITLE}-title`}
                className="pointer-events-none absolute left-3.25 top-3.25 z-30 text-sm text-neutral-500 whitespace-nowrap data-[hidden=true]:text-transparent"
                data-hidden={!!value || submitted}
              >
                {TITLE}
              </motion.span>

              <AnimatePresence mode="popLayout">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={SPRING}
                    className="flex h-full flex-col items-center justify-center"
                  >
                    <FeedbackSuccess />
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    exit={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                    transition={SPRING}
                    style={{ borderRadius: 6 }}
                    className="flex h-full flex-col  border border-neutral-200 bg-white"
                  >
                    <textarea
                      autoFocus
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="block w-full flex-1 resize-none bg-transparent p-2 text-sm focus:outline-none"
                    />

                    <div className="relative shrink-0">
                      <div className=" overflow-hidden">
                        <SvgLine className="block" />
                      </div>
                      <Notch side="left" />
                      <Notch side="right" />
                    </div>

                    <div className="flex shrink-0 items-center justify-end px-2 py-2.5">
                      <button
                        onClick={handleSubmit}
                        className="flex h-7 w-28 cursor-pointer items-center justify-center rounded-sm bg-linear-to-b from-blue-400 to-blue-500 px-2 py-1 text-xs font-semibold text-white shadow-[inset_0_0_1px_1px_#ffffff14,0_1px_1.5px_#00000052,0_0_0_0.5px_#1a94ff]"
                      >
                        {isLoading ? (
                          <Loader className="size-5 animate-spin bg-linear-to-tl from-neutral-100 to-neutral-500 bg-clip-text" />
                        ) : (
                          "Send feedback"
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeedbackSuccess = () => (
  <>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-mt-1"
    >
      <path
        d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
        fill="#2090FF"
        fillOpacity="0.16"
      />
      <path
        d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
        stroke="#2090FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <h3 className="mb-1 mt-2 text-sm font-medium text-neutral-800">
      Thank you for your feedback! 🙏
    </h3>
  </>
);

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
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

const Notch = ({ side }: { side: "left" | "right" }) => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    className={`absolute top-1/2 z-10 -translate-y-1/2 ${
      side === "left" ? "-left-px" : "-right-px -scale-x-100"
    }`}
  >
    <path
      d="M0 0.5C3 0.5 5.5 2.2 5.5 5C5.5 7.8 3 9.5 0 9.5Z"
      fill="#f5f5f5"
    />
    <path
      d="M0 0.5C3 0.5 5.5 2.2 5.5 5C5.5 7.8 3 9.5 0 9.5"
      stroke="#e5e5e5"
    />
  </svg>
);
