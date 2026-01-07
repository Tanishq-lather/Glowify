import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className="h-auto py-18 px-4 md:py-18 md:px-16  bg-[#FFA673] flex flex-row md:flex-row justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -50}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} className="grid grid-rows-auto gap-3 md:gap-1 content-start">
            <h1 className="font-bold md:text-3xl text-xl text-black md:my-2">Glow Naturally with Glowify!</h1>
            <p className="font-medium md:text-xl text-sm text-black md:my-2">100% natural skincare products designed for healthy, glowing skin.</p>
            <button className="px-4 py-2 font-semibold text-sm md:text-lg bg-green-950 hover:bg-950/90 text-[#FFA673] rounded-xl italic cursor-pointer self-center justify-self-start mt-2 md:mt-24">Shop Now!</button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} className="max-w-auto md:h-96 h-60 flex justify-center items-center">
            <img src="./assets/Glowify_1.png" alt="brand_image" />
        </motion.div> 
      </div>
    </>
  )
}

export default Hero
