import React from 'react'
import { motion } from "framer-motion";

const Action = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="flex flex-row bg-[#FFA673] rounded-t-xl rounded-b-3xl mt-16 items-center text-black md:gap-100 gap-8 mx-12 mb-4 md:px-30 md:pt-10 md:pb-8 px-8 pt-6 pb-2">

        <div className="max-w-auto md:h-96 h-50 flex justify-center items-center">
          <img src="./assets/Glowify_1.png" alt="" className="" />
        </div>

        <div className="flex flex-col h-full items-start ">
          <h1 className="font-bold md:text-3xl text-xl ">Ready for Glowiing Skin</h1>
          <p className="font-medium md:text-lg text-xs mt-2 ">Join thousands of happy coustomers and start your journey to healtier, more radiant skin today.</p>

          <button className='bg-black text-[#FFA673] md:px-6 md:py-2 px-3 py-1 md:text-md text-xs rounded-3xl md:mt-8 mt-6 hover:bg-black/50 hover:text-black focus:bg-black/50 focus:text-black cursor-pointer'>Shop now</button>
        </div>
      </motion.div>
    </>
  )
}

export default Action
