import React from 'react'
import Button from '../../component/common/button/Button'
import ThumbnailPreview from '../../component/thumbnailPreview/ThumbnailPreview'

const NewGraph = () => {
  return (
    <div className='container mx-auto bg-white w-full p-6 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className='bg-slate-100 p-2 rounded-xl flex flex-col w-full'>
            <div className='flex items-center justify-between'>
              <span className='items-center w-6 text-gray-700'>Title</span>
              <div className='flex flex-col sm:flex-row items-center '>
                <input  
                  className='ml-1 mb-2 h-8 sm:w-1/2 bg-slate-200 outline-none relative rounded-md' 
                  placeholder='Date'
                  // onFocus={() => setOpenStartCalendar(true)}
                  // value={state.startDate}
                />
                
              </div>
            </div>  
            <div className='flex items-center justify-between'>
              <span className='items-center w-6 text-gray-700'>Description</span>
              <div className='flex flex-col sm:flex-row items-center'>
                <input  
                  className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-md relative' 
                  placeholder='Date'
                  // onFocus={() => setOpenEndCalendar(true)}
                  // value={state.endDate}
                />
                
                
                {/* <input className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-sm' placeholder='Time'/> */}
              </div>
            </div>        
          </div>
        </div>
          <Button text={"Create Graph"}  />
        </div>
        <div>
          <ThumbnailPreview/>
        </div>
    </div>


  )
}

export default NewGraph