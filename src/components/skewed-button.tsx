'use client'
import { motion } from "motion/react"

export const SkewedButton = () => {
  return (
    <div className=" bg-white flex items-center justify-center h-screen">
      <motion.button whileHover={{
        rotateX: 40,
        rotateZ: -20,
        scale:1.3,
        boxShadow:"0 12px 48px 0 rgba(0,0,0,0.2)"
      }}
        transition={{
          ease: "easeInOut",
          duration:0.1
      }}
        className="bg-linear-to-t hover:text-white hover:from-rose-500  hover:to-rose-600 hover:border-rose-400 transition duration-300 from-rose-600 to-rose-700 border-rose-500 relative border-2 px-4 py-2 rounded-full text-neutral-200 font-semibold text-shadow-2xs text-lg cursor-pointer ">
        Subscribe
      </motion.button>
 </div>
  )
}
