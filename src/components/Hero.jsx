import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
     <div className='relative max-h-[500px]'>
         {/* Overlay */}
         <div className='absolute w-full h-full p-4 pt-56 max-h-[500px] bg-black/50 text-gray-200'>
             <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
             <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods</span> Delivered</h1>
         </div>
         <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/15010292/pexels-photo-15010292/free-photo-of-close-up-photo-of-burget.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt='Food image' />
     </div>
 </div>
  )
}

export default Hero