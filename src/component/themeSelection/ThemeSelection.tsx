import { EyeDropperIcon, PaintBrushIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ThemeSelection = () => {
  return (
    <div className='mt-6'>
      <span className='mb-4 text-md font-bold'>Graph Layout Settings</span>
      <div className='flex items-center justify-between sm:gap-10 mt-4'>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 p-2 bg-slate-200 rounded-lg relative'>
            <div className="relative group w-full flex justify-center items-center">
              <input type="color"  className="relative z-10 opacity-0 h-full w-full cursor-pointer"  name="bgfile" id="bgfile"/>
              <div className="absolute top-2 right-0 bottom-0 left-0 w-full h-full flex items-center justify-center">
                <EyeDropperIcon className='h-6 w-8'/>      
              </div>
            </div>           
            
          </div>
          <span className='text-sm' >BgColor</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg bg-slate-200 p-2'>
            <PhotoIcon className='h-6 w-8'/>
          </div>
          <span className='text-sm'>BgImage</span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg relative bg-slate-200 p-2' >
            <PaintBrushIcon className='h-6 w-8'/>             
          </div>
          <span className='text-sm'>Gradient</span>
        </div>
        {/* <div className='flex flex-col items-center'>
          <div className='h-10 w-12 rounded-lg bg-slate-200 p-2'>
            <FileUpload setFile={handleFileUpload}/>
          </div>
          <span className='text-sm'>Upload</span>
        </div> */}
        
      </div>
    </div>
  )
}

export default ThemeSelection