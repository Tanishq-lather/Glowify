import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className="bg-[#FFA673] w-full h-16 flex items-center justify-between p-2">

         <div className="font-bold text-2xl text-black pl-1 md:pl-3">Glowify</div>

         <div className="md:flex hidden justify-center gap-4">
            <div className="text-md text-green-950 font-medium hover:underline cursor-pointer">Home</div>
            <div className="text-md text-green-950 font-medium hover:underline cursor-pointer">Products</div>
            <div className="text-md text-green-950 font-medium hover:underline cursor-pointer">About Us</div>
            <div className="text-md text-green-950 font-medium hover:underline cursor-pointer">Contacts</div>
         </div>
         
         <div className="flex flex-row text-black items-center gap-3 cursor-pointer md:pr-0 pr-4">
            <i className="fa-solid fa-bag-shopping fa-2x"></i>
            <div className="font-bold text-2xl text-black md:pr-1">Shop</div> 
         </div>

      </section>
    </>
  )
}

export default Navbar
