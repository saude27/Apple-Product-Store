import React from 'react'
import { iphoneModels } from '../Data/index'

function Iphone() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-around bg-white p-4.5'>
        <h3 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-2'>
            Which iPhone is right for you?
        </h3>
        <div className='flex justify-between w-full flex-col overflow-hidden overflow-y-auto md:flex-col lg:flex-row md:overflow-y-auto'>
            {iphoneModels.map((iphone, index) => (
                <div key={index} className='flex flex-col items-center justify-between gap-y-2'>
                    <img src={iphone.img} alt={iphone.name} className='2xl:w-64 xl:w-40 lg:w-38 sm:w-48 md:h-64 sm:h-48 h-40 object-contain' />
                    <a href="#" className='2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-2'>{iphone.name}</a>
                    <p className='2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2'>{iphone.description}</p>
                    <span className='2xl:text-base xl:text-sm lg-text-xs text-blue-400 mt-2'>{iphone.price}</span>
                    <button 
                      type='button'
                      className='text-sm mt-2 px-3 py-1 bg-blue-400 text-white rounded-full'>
                        Buy
                      </button>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Iphone
