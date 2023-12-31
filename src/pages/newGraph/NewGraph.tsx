import React from 'react'
import Button from '../../component/common/button/Button'
import ThumbnailPreview from '../../component/thumbnailPreview/ThumbnailPreview'
import { PlusIcon } from '@heroicons/react/24/outline'

const NewGraph = () => {
  return (
    <div className='container mx-auto my-8    bg-white w-full p-6 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <section>
            <div className='flex gap-4'>
              <div className='bg-slate-100 p-2 rounded-xl flex flex-col w-full'>
                <div className='flex items-center gap-4'>
                  <span className='items-center w-24 text-gray-700'>Title</span>
                    <input  
                      className='ml-1 mb-2 h-8 w-full bg-slate-200 outline-none relative rounded-md' 
                      placeholder='Title'
                     
                      // value={state.startDate}
                    />                    
                  {/* <div className='flex flex-col sm:flex-row items-center '>
                  </div> */}
                </div>  
                <div className='flex items-center gap-4'>
                  <span className='items-center w-24 text-gray-700'>Description</span>
                  <input  
                    className=' mb-2 h-8 w-full sm:mb-0 bg-gray-200 outline-none rounded-md relative' 
                    placeholder='Description'
                    // value={state.endDate}
                  />
                </div>        
              </div>
            </div>

            
            <div className='flex gap-4 mt-8'>
              <div  className='bg-slate-100 p-2 rounded-xl flex flex-col w-full'>
                <input placeholder='Add Event Location'className='bg-slate-100 outline-none'/>
                <span className='text-sm text-gray-700'>Offline location or virtual link</span>
              </div>
            </div>
          </section>

          <Button text={"Create Graph"} icon={<PlusIcon className="flex-shrink-0 h-6 w-6 text-white"/>} />
        </div>
        <div>
          <ThumbnailPreview/>
        </div>
      </div>
      {/* <Timeline/> */}
    </div>


  )
}

export default NewGraph