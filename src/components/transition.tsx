'use client'

import Image from "next/image"
import { motion } from "motion/react"

export const Transition = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div whileHover={{
        rotateX:40
      }}
        transition={{
          duration: 1,
          ease:"easeInOut"
      }}
        className="size-56 p-1 ring-2 ring-neutral-200 rounded-md shadow-md cursor-pointer">
        <Image src="https://i.pinimg.com/736x/b9/90/a6/b990a6599e36e5727feb5a40bc547e7d.jpg" alt="test-image" height={1000} width={1000} className="size-full object-cover rounded-sm border-2 border-neutral-200"  />
      </motion.div>
      <motion.div whileHover={{
        rotateX:40
      }}
        transition={{
          duration: 0.2,
          ease:"easeOut"
      }}
        className="size-56 p-1 ring-2 ring-neutral-200 rounded-md shadow-md cursor-pointer">
        <Image src="https://i.pinimg.com/736x/b9/90/a6/b990a6599e36e5727feb5a40bc547e7d.jpg" alt="test-image" height={1000} width={1000} className="size-full object-cover rounded-sm border-2 border-neutral-200"  />
      </motion.div>
      <motion.div whileHover={{
        rotateX:40
      }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping:10
      }}
        className="size-56 p-1 ring-2 ring-neutral-200 rounded-md shadow-md cursor-pointer">
        <Image src="https://i.pinimg.com/736x/b9/90/a6/b990a6599e36e5727feb5a40bc547e7d.jpg" alt="test-image" height={1000} width={1000} className="size-full object-cover rounded-sm border-2 border-neutral-200"  />
      </motion.div>
      <motion.div whileHover={{
        rotateX:40
      }}
        transition={{
          type: "spring",
          visualDuration: 1,
          bounce:0.3
      }}
        className="size-56 p-1 ring-2 ring-neutral-200 rounded-md shadow-md cursor-pointer">
        <Image src="https://i.pinimg.com/736x/b9/90/a6/b990a6599e36e5727feb5a40bc547e7d.jpg" alt="test-image" height={1000} width={1000} className="size-full object-cover rounded-sm border-2 border-neutral-200"  />
     </motion.div>
    </div>
  )
}
