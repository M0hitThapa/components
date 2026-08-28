'use client'

import { IconChevronDown, IconX } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

export const HoverCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)


  return (
    <div className="flex items-center justify-center h-screen bg-neutral-100">
{isOpen && <div className=" border border-neutral-200 rounded-md max-w-md w-full bg-white relative p-2 ">
  <button type="button" className="absolute top-2 right-2">
    <IconX onClick={() => setIsOpen(false)} className="size-4 text-neutral-600 hover:text-neutral-800" />
  </button>
        <div className="flex flex-col items-start justify-center gap-2 ">
          <p  className="text-md font-medium text-neutral-800 text-shadow-2xs tracking-tight">
           Organize UI components
          </p>
          <p className="text-sm font-normal text-neutral-600 tracking-tight">
           Clerks UI components add turn-key simplicity to complex Organization management tasks.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center w-32 mx-auto px-1 py-1.5 rounded-xl shadow-sm shadow-black/10 ring-1 ring-black/10">
                     <div className="flex items-center gap-1">

                       <span className="tracking-tight text-neutral-800 text-sm font-bold mr-4">
                         Clerk
                       </span>
                       <IconChevronDown className="size-4 text-neutral-600" />
                     </div>
        </div>

        <div className="flex-1 bg-neutral-100 h-80 m-5 border-2 border-neutral-200 rounded-md relative">
          <motion.div initial={{
            opacity: 0,
            filter: "blur(10px)",
            scale:0.95
          }}
          whileHover={{
            opacity: 1,
            filter: "blur(0px)",
            scale:1.02

          }}
          transition={{
            type:"spring",
            stiffness:100,
            damping:10
}}
            className="relative h-full w-full">
            <Image src="/images/1.png" alt="1-image" fill className=" rounded-md object-cover"  />

          </motion.div>
        </div>

</div>}
    </div>
  )
}
