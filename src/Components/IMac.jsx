import React, { useState } from 'react'
import { imacModels } from '../Data'

const IMac = () => {
  const [selectedColor, setSelectedColor] = useState('green');
  const [visibleLabel, setVisibleLabel] = useState('Green');

  function getCurrentModel () {
    return imacModels.find((model) => model.label.toLowerCase() === selectedColor)
  }
  return (
    <div className='h-full w-full overflow-y-auto grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative'>
     <div className='h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50'>
         <img src={getCurrentModel().images.side} alt="imac" className='2xl:max-w-full xl:max-w-36 max-w-24 overflow-auto object-contain h-40 lg:h-70'/>
     </div>
      <div className='bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4'>
         <img src={getCurrentModel().images.front} alt="imac" className='2xl:max-w-full xl:max-w-52 lg:max-w-48 overflow-auto object-contain'/>
      </div>
      <div className='bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4'>
         <img src={getCurrentModel().images.back} alt="imac" className='2xl:max-w-full xl:max-w-52 lg:max-w-48 overflow-auto object-contain'/>
      </div>
      <div className='absolute bottom-4 left-4 md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 flex flex-col space-y-1 lg:space-y-2 bg-gray-50 p-2 rounded-lg'>
        {imacModels.map((model, index) => (
          <div key={index} className='flex space-x-2'>
          <button 
          style={{backgroundColor: model.bg}}
          className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center ${selectedColor === model.label.toLocaleLowerCase() ? "border-2 border-blue-500" : "border-transparent"}`}
          onClick={() => {
            setSelectedColor(model.label.toLowerCase());
            setVisibleLabel(model.label);
          }}
          />
           <span className='text-sm min-w-[60px]'>
             {visibleLabel === model.label ? model.label : ''}
           </span>
      </div>
        ))}
        <button type='button' className='text-sm mt-4 w-min py-1 px-2 bg-blue-400 rounded-full text-white'>Shop</button>
      </div>
    </div>
  )
}

export default IMac;
