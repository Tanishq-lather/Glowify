import React from 'react';
import { motion } from 'framer-motion';

const Feature = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4}} className="h-auto md:py-18 py-10 md:px-13 px-8 flex flex-col text-black md:items-center items-start">
        <h1 className="text-2xl md:text-3xl font-bold">Why to choose our Product ?</h1>
        <p className="text-md md:text-xl font-medium mt-1">Glowify is the one of the most trusted brand in SkinCare.</p>

        <div className="flex flex-row mt-16 md:gap-10 gap-20">

            <motion.div initial={{ opacity: 0, x: -50}} whileInView={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="md:py-8 md:px-4 py-6 px-3 bg-[#FFA673] shadow-2xl rounded-xl">
                <h1 className="md:text-2xl text-xl font-semibold ">Made with Natural Ingredients</h1>
                <p className="md:text-xl text-xs font-medium mt-4">All of our products made with 100% Natural ingredients, No Chemicals.</p>
            </motion.div>

            <div className="md:block hidden md:mx-20 mx-6 md:mt-10 mt-4 max-w-full">
              <img src="./assets/Glowify_2.png" alt="Glowify_brand" className='scale-150'/>
            </div>

            <motion.div initial={{ opacity: 0, x: 50}} whileInView={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4}}  className="md:py-8 md:px-4 py-6 px-3 bg-[#FFA673] shadow-2xl rounded-xl">
                <h1 className="md:text-2xl text-xl font-semibold ">Dermatologist approved</h1>
                <p className="md:text-xl text-xs font-medium mt-4">All of our products are approved by Dermatologist, and have no side-effects.</p>
            </motion.div>
        </div>

        <div className="flex flex-row mt-22 justify-center"> 

            <div className="py-8 px-4 bg-[#FFA673] shadow-2xl rounded-xl w-[60%]">
                <h1 className="text-2xl font-semibold ">Eco-Friendly packaging</h1>
                <p className="text-xl font-medium mt-4">All of our products have Eco-Friendly Packaging, No plastic used.</p>
            </div>

        </div>

      </motion.div>
    </>
  )
}

export default Feature
