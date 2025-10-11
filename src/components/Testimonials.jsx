import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [focus, setFocus] = useState(true);
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50}} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} viewport={{ once: true, amount: 0.4 }} className="h-auto md:py-18 py-10 md:px-13 px-8 flex flex-col md:items-center items-start mt-8">
         <h1 className="font-bold md:text-3xl text-2xl text-black">What Our Customers are saying</h1>
         <p className="font-medium md:text-xl text-md text-black">Our Cusomers loves the differnce our natural skin care products made in their routines.</p>

         <div className="flex md:gap-15 mt-14 py-14 ">
            {/* 1 review */}
            <div onMouseEnter={() => {setFocus(false)}} onMouseLeave={() => {setFocus(true)}} className="w-1/3 max-h-auto flex md:flex-row flex-col bg-gray-200 hover:bg-white rounded-xl p-4 shadow-lg focus:shadow-2xl gap-4 hover:scale-120 transition duration-500">

                <div className="flex max-w-full justify-center items-start h-auto scale-80">
                   <img src="./assets/Customer_1.jpg" alt="" className="rounded-full max-w-full" />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold md:text-2xl text-md">Priyanka rai</h1>
                  <p className="font-medium md:text-lg text-xs">I love this product. It's an awesome product with No side effects.</p>
                </div>
            </div>

            {/* 2 review  */}
            <div className={`w-1/3 max-h-auto flex md:flex-row flex-col bg-gray-200 hover:bg-white rounded-xl p-4 shadow-lg focus:shadow-2xl gap-4 ${focus ? 'scale-120' : ''} transition duration-500`}>

                <div className="flex max-w-full justify-center items-start h-auto">
                   <img src="./assets/Customer_2.avif" alt="" className="rounded-full" />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold md:text-2xl text-md">Sam Khurana</h1>
                  <p className="font-medium md:text-lg text-xs">Glowify is awesome, perfect for both Normal and Special days.</p>
                </div>
            </div>

            {/* 3 review  */}
            <div onMouseEnter={() => {setFocus(false)}} onMouseLeave={() => {setFocus(true)}} className="w-1/3 max-h-auto flex md:flex-row flex-col bg-gray-200 hover:bg-white rounded-xl p-4 shadow-lg focus:shadow-2xl gap-4 hover:scale-120 transition duration-500">

                <div className="flex max-w-full justify-center items-start h-auto scale-70">
                   <img src="./assets/Customer_3.jpg" alt="" className="rounded-full max-w-full" />
                </div>

                <div className="flex flex-col">
                  <h1 className="font-bold md:text-2xl text-md">Riyah Sharma</h1>
                  <p className="font-medium md:text-lg text-xs">This is Awesome. I love Glowify ❤️. It's totaly Natural.</p>
                </div>
            </div>

         </div>


      </motion.div>
    </>
  )
}

export default Testimonials
