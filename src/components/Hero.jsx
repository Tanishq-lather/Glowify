import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className="h-auto py-18 px-4 md:py-18 md:px-16  bg-[#FFA673] flex flex-row md:flex-row justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -50}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} className="flex flex-col justify-center">
            <h1 className="font-bold md:text-3xl text-xl text-black ">Glow Naturally with Glowify!</h1>
            <p className="font-medium md:text-xl text-sm text-black ">100% natural skincare products designed for healthy, glowing skin.</p>
            <button className="md:w-1/4 w-1/2 py-2 md:px-0 px-1 md:mt-28 mt-16 bg-green-950 hover:bg-green-950/90 font-semibold text-[#FFA673] md:text-2xl text-xs rounded-xl italic cursor-pointer" >Shop Now!</button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} className="max-w-auto md:h-96 h-60 flex justify-center items-center">
            <img src="./assets/Glowify_1.png" alt="brand_image" />
        </motion.div> 
      </div>
    </>
  )
}

export default Hero
