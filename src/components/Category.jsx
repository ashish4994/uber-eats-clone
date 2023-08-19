import React from 'react'
import { categories } from '../data/data';

const Category = () => {
  
    return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div>
        <h1 className='text-2xl md:text-4xl font-bold text-center text-orange-600'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {
                categories.map((item,index) => (
                    <div key={index} 
                    className='flex items-center justify-between gap-2 bg-orange-100 rounded-lg p-4'>
                        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                        <img className='w-20'  src={item.image} alt='/' />
                    </div>

                ))
            }
        </div>
        </div>
        </div>
  )
}

export default Category