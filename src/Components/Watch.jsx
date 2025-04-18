import React from 'react'
import { watchModels } from '../Data'

const Watch = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-white h-full py-8 px-4' >
      <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-3 text-center'>
        Which Apple Watch is right for you?
      </h1>
      <div className='w-full flex justify-around flex-col overflow-auto place-items-center md:flex-row lg:flex-row'>
            {watchModels.map((watch, index) => (
              <div className='w-60 h-[400px] flex flex-col justify-around group'>
                <div key={index} className='w-full h-64 mb-4 overflow-hidden relative'>
                 <img src={watch.imgs[0]} alt="watch" className='absolute w-full h-full object-center opacity-100 group-hover:opacity-0 transition duration-300 m-auto'/>
                 <img src={watch.imgs[1]} alt="watch" className='absolute w-40 h-full object-center opacity-0 group-hover:opacity-100 transition duration-300 m-auto' />
                </div>
            
            
            <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold text-center'>{watch.name}</h3>
            <a href="#" className='my-2 text-base text-blue-400 text-center'>{watch.price}</a>
            <div className='md:text-sm text-ss text-gray-700 my-2 text-center'>
                {watch.desc.map((spec, index) => (
                  <span key={index} className='block'>{spec}</span>
                ))}
                
            </div>
            <button className='w-min text-sm mt-4 py-1 px-2 bg-blue-400 rounded-full text-white m-auto'>Shop</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Watch
