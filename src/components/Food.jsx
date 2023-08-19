import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [foods, setFoods] = useState(data);

    function filterByCategory(category){
        let filtered_items = data.filter(f => f.category == category);
        setFoods(filtered_items);
    }

    let filterByPrice = (price) =>{
        let filtered_items = data.filter(f => f.price == price);
        setFoods(filtered_items);
    }

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
     <h1 className='font-bold text-4xl md:text-6xl text-orange-500 text-center'>Top Rated Menu</h1>
     {/* FilterType */}
     <div className='flex flex-col lg:flex-row justify-between'>
         <div>
             <h4 className='font-bold text-gray-700'>Filter Type</h4>
             <div className='flex flex-wrap gap-1'>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setFoods(data)}>All</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('burger')}>Burgers</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('pizza')}>Pizza</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('salad')}>Salad</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByCategory('chicken')}>Chicken</button>
             </div>
         </div>
         {/* Filter Price */}
         <div className='mt-2'>
             <h4 className='font-bold text-gray-700'>Filter Price</h4>
             <div className = 'flex flex-wrap gap-1'>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByPrice('$')}>$</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByPrice('$$')}>$$</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByPrice('$$$')}>$$$</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByPrice('$$$$')}>$$$$</button>
                 <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterByPrice('$$$$$')}>$$$$$</button>
             </div>
         </div>
     </div>

    {/* Items */}
     <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 pt-4'>
        {foods.map((item,index) => (
            <div key={index} className='border shadow-lg rounded-t-lg hover:scale-105 duration-300 cursor-pointer'>
            <img className='w-full h-[200px] object-cover rounded-t-lg'src={item.image} alt='/' />
            <div className='flex items-center justify-between px-2 py-2'>
            <h3 className='font-bold'>{item.name}</h3>
            <p>
                <span className='bg-orange-500 rounded-full p-1'>{item.price} </span></p>
            </div>
            </div>
            ))}
    </div>

 </div>
  )
}

export default Food