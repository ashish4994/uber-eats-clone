import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px]  mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute bg-black/30 text-white p-2 rounded-xl w-full h-full'>
            <p className='text-2xl font-bold'>Sun's Outl, BOGO's Out</p>
            <p>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://media.istockphoto.com/id/1398317278/photo/thai-fried-rice-with-shrimp-green-onion-lime-on-wooden-background-side-view-traditional-thai.jpg?s=612x612&w=is&k=20&c=4bpDcL-WUAW1iRUXQ5Jg0NVqFIB1DXXq1_dDNrdhbZY=" alt='/' />
      </div>

      <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute bg-black/30 text-white p-2 rounded-xl w-full h-full'>
            <p className='text-2xl font-bold'>New Restraunts</p>
            <p>Added daily</p>
            <button className='border-white bg-white text-black mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='/' />
      </div>

      <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute bg-black/30 text-white p-2 rounded-xl w-full h-full'>
            <p className='text-2xl font-bold'>We Deliver Deserts Too</p>
            <p>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='/' />
      </div>

  </div>
  )
}

export default HeadLineCards