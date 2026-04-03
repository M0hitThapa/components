"use client";

import Image from "next/image";
import Link from "next/link";

import {
  EyeIcon,
  UserIcon,
  QuestionIcon,
  DollarIcon,
  ExternalLinkIcon,
  CopyIcon,
} from "@/components/icons";

const TIMELINE_DETAILS = [
  { icon: EyeIcon, title: "First Visit", number: "Sep 8" },
  { icon: UserIcon, title: "Signed Up", number: "Sep 8" },
  { icon: DollarIcon, title: "First Purchase", number: "Oct 13" },
  { icon: QuestionIcon, title: "Support Chat", number: "Oct 18" },
];

const USER_TAGS = [
  {
    label: "HIGH VALUE USER",
    className:
      "bg-green-100 text-green-700 dark:bg-green-700/50 dark:text-green-400",
  },
  {
    label: "AT RISK",
    className:
      "bg-orange-100 text-orange-700 dark:bg-orange-700/50 dark:text-orange-400",
  },
  {
    label: "VIP MEMBER",
    className:
      "bg-neutral-200 text-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-400",
  },
];

const USER_STATS = [
  { label: "Lifetime Value", value: "$2,412" },
  { label: "Location", value: "Nepal" },
  { label: "Sessions", value: "13", icon: <ExternalLinkIcon /> },
];

function GlowLine({ position }: { position: "top" | "bottom" }) {
  const posClass = position === "top" ? "-top-px" : "-bottom-px";
  return (
    <>
      <span
        className={`absolute inset-x-0 ${posClass} block h-px w-full bg-linear-to-r from-transparent via-[#89fc00]/70 to-transparent opacity-100`}
      />
      <span
        className={`absolute -inset-x-4 ${posClass} mx-auto block h-px w-[calc(100%+2rem)] bg-linear-to-r from-transparent via-green-500 to-transparent blur-sm opacity-80`}
      />
    </>
  );
}

function TimelineItem({
  icon: Icon,
  title,
  number,
}: (typeof TIMELINE_DETAILS)[number]) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-[0px_0px_2px_2px_#f0f0f0] dark:shadow-[0px_0px_2px_2px_#141414] bg-neutral-100 dark:bg-neutral-700">
        <Icon size={22} />
      </div>
      <h1 className="text-[12px] tracking-tight font-semibold text-neutral-400 dark:text-neutral-500">
        {title}
      </h1>
      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {number}
      </p>
    </div>
  );
}

export const ProfileCard = () => {
  return (
    <div className="h-154 w-130 rounded-2xl bg-white dark:bg-neutral-900 shadow-[0px_0px_2px_2px_#f0f0f0] dark:shadow-[0px_0px_4px_1px_#262626] py-3">
     
      <div className="flex items-center justify-between px-5 border-b-2 pb-3 border-neutral-50 dark:border-neutral-800">
        <div className="flex items-center justify-center gap-2">
          <div className="size-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <div className="size-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <div className="size-4 rounded-full bg-[#89fc00] shadow-[0px_0px_2px_2px_#89fc00]" />
        </div>
        <div className="size-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      </div>

     
      <div className="relative pb-12">
       
        <div
          className="absolute inset-0 pointer-events-none mask-t-from-20% mask-t-to-80%"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-neutral-400) 1px, transparent 0)",
            backgroundSize: "10px 10px",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="relative border-x-2 rounded-b-xl border-neutral-50 dark:border-neutral-800 mx-12 pt-12">
          <div className="relative">
            <GlowLine position="top" />
            <GlowLine position="bottom" />

          
            <div className="h-70 w-105 rounded-xl shadow-[0px_0px_2px_2px_#f0f0f0] dark:shadow-[0px_0px_10px_0px_#0d0d0d] bg-neutral-50 dark:bg-neutral-800 px-5 py-4">
            
              <div className="flex items-start justify-between pb-4 gap-2">
                <Image
                  src="/profile.jpeg"
                  alt="profile-image"
                  height={60}
                  width={60}
                  className="rounded-xl shadow-[0px_0px_2px_2px_#d4d4d4] dark:shadow-[0px_0px_2px_2px_#141414]"
                />

                <div className="flex flex-col items-start justify-center gap-2">
                  <h2 className="text-md font-semibold text-neutral-800 dark:text-neutral-300">
                    Peter Parker
                  </h2>
                  <div className="flex items-center justify-between gap-1">
                    {USER_TAGS.map(({ label, className }) => (
                      <span
                        key={label}
                        className={`text-[10px] font-semibold py-1 px-2 rounded-sm tracking-tight ${className}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#"
                  className="text-xs text-neutral-600 dark:text-neutral-300 font-semibold"
                >
                  View more
                </Link>
              </div>

      
              <div className="flex justify-between py-3 border-y border-neutral-300 dark:border-neutral-700">
             
                <div>
                  <h1 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                    User ID
                  </h1>
                  <div className="flex gap-2 items-center justify-start">
                    <p className="text-sm font-semibold tracking-tight text-neutral-600 dark:text-neutral-300">
                      #3636572
                    </p>
                    <CopyIcon />
                  </div>
                </div>

                
                <div className="flex gap-5">
                  {USER_STATS.map(({ label, value, icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start justify-center"
                    >
                      <h1 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                        {label}
                      </h1>
                      <div className="flex gap-1 items-center">
                        <p className="text-sm font-semibold tracking-tight text-neutral-600 dark:text-neutral-300">
                          {value}
                        </p>
                        {icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             
              <div className="flex items-center justify-between py-5">
                {TIMELINE_DETAILS.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="border-t border-neutral-100 dark:border-neutral-800 flex flex-col items-start justify-center px-10 gap-3 py-7 rounded-b-2xl bg-neutral-100 dark:bg-neutral-800">
        <h1 className="text-lg font-medium text-neutral-600 dark:text-neutral-200">
          Customer Journey Insights
        </h1>

        <p className="text-md text-neutral-500 dark:text-neutral-400">
          Track user activity from first visit to purchase. Understand behavior
          patterns and optimize engagement at every touchpoint.
        </p>
        <Link className="text-sm text-green-600 dark:text-green-300" href="#">
          View detailed analytics →
        </Link>
      </div>
    </div>
  );
};