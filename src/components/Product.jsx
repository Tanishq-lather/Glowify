import React from 'react';
import { motion } from 'framer-motion';

const Product = () => {
  return (
    <>
      <div className="flex flex-col mt-16 items-center ">

        <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="h-auto md:py-18 py-10 md:px-13 px-8 flex flex-col text-black md:items-center items-start">
          <h1 className="font-bold md:text-3xl text-2xl">Discover the best in Skincare</h1>
          <p className="font-medium md:text-lg text-md">Explore out Top Products made with premium natural ingredients. These Formulas are designed to hydrate.</p>
        </motion.div>
        
        
        <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="mt-16 flex md:flex-row flex-col w-[80%]  bg-gray-200 rounded-2xl items-center">

          <div className="flex items-start md:w-1/2 w-full">
            <img src="./assets/Glowify_3.jpg" alt="" className='scale-100 md:rounded-l-xl max-w-full'/>
          </div>

          <div className="p-8 text-black flex flex-col">
            <h1 className="font-bold text-2xl">Hydration Boost Cream</h1>
            <p className="font-medium text-lg mt-2">Hydration Boost Cream deeply moisturizes and improves skin elasticity. Its lightweight, non-greasy formula keeps your skin soft and smooth all day.</p>

            <div className="mt-6 flex flex-row gap-3 items-center">
              <button className='font-semibold text-lg bg-[#FFA673] rounded-xl px-6 py-3'>Shop Now!</button>
              <h2 className='font-semibold text-3xl'>99</h2>
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="mt-16 flex md:flex-row flex-col w-[80%]  bg-gray-200 rounded-2xl items-center">
          <div className="p-8 text-black flex flex-col">
            <h1 className="font-bold text-2xl">Glow Up Cream</h1>
            <p className="font-medium text-lg mt-2">Glow Up cream makes your face glow more. And, It's also make your skin soft. It's work for Whole day. Make your skin soft, smooth and add more glow</p>

            <div className="mt-6 flex flex-row gap-3 items-center">
              <button className='font-semibold text-lg bg-[#FFA673] rounded-xl px-6 py-3'>Shop Now!</button>
              <h2 className='font-semibold text-3xl'>159</h2>
            </div>
          </div>

          <div className="flex items-start md:w-1/2 w-full">
            <img src="./assets/Glowify_4.jpg" alt="" className='scale-100 md:rounded-r-xl max-w-full'/>
          </div>


        </motion.div>
  

      </div>
    </>
  )
}

export default Product
