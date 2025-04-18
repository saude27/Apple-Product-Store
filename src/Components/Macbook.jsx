import React, { useState } from 'react'
import { macbookModels } from '../Data'

const Macbook = () => {
    const [selectedChip, setSelectedChip] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const currentMB = macbookModels[selectedChip];
    const currentColor = currentMB.colors[selectedColor];
    function handleSelectedChip(index) {
      setSelectedChip(index);
      setSelectedColor(0);
    }
  return (
    <div className='flex flex-col items-center justify-start bg-white p-4.5 h-full'>
      <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-3 text-center'>
        Choose your new MacBook Air.
      </h1>
      <div className='flex'>
        {macbookModels.map((mb, index) => (
           <button 
              key={index} 
              onClick={() => handleSelectedChip(index)} 
              className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border mt-4 ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}`}>
             <span className='2xl:text-lg xl:text-sm text-xs font-bold text-gray-800'>With {mb.chip} chip</span>
             <span className='2xl:text-base xl:text-sm text-xs text-gray-600'>{mb.price}</span>
           </button>
   
        ))}
      
      </div>

      <div className='flex flex-col 2xl:p-4 md:items-end items-center place-items-center'>
        <div className='w-80 h-100 2xl:mb-0 -mb-8'>
            <img src={currentColor.img}
              alt={`MacBook Air with ${currentMB.chip}`} 
              className='2xl:w-38 xl:w-35 w-25 2xl:mt-0 sm:mt-1 object-contain m-auto'
            />
            <span className='@xl:text-lg xl:text-sm font-medium  text-gray-800 mb-2 md:text-left text-center block'>
              {currentColor.label}
            </span>
            <div className='flex space-x-2 mb-4 md:text-left justify-center md:justify-start'>
              {currentMB.colors.map((color, index) => (
                 <button 
                   key={index} 
                   style={{backgroundColor: color.bg}} 
                   className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500 ${selectedColor === index ? "border-2 border-blue-400" : "border-transparent"}`}
                   onClick={() => setSelectedColor(index)}
                   ></button>
              ))}
                
                
            </div>
            <img src={currentMB.icon} 
              alt={`Apple ${currentMB.chip} icon`} 
              className='w-12 h-12 2xl:mb-1 xl:mb-1 m-auto md:ml-0' 
            />
            <div className='2xl:mb-4 xl:mb-2 text-center md:text-left'>
                {currentMB.specs.map((spec, index) => (
                  <p key={index} className='2xl:text-lg xl:text-sm font-semibold text-gray-800 mb-0.5 text-sm mt-0.5'>{spec}</p>
                ))}
                    
            </div>
            <button type='button' className='w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0 flex justify-center mx-auto md:mx-0'>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Macbook
