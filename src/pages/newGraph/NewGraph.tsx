import React from 'react'
import Button from '../../component/common/button/Button'
import ThumbnailPreview from '../../component/thumbnailPreview/ThumbnailPreview'
import { PlusIcon } from '@heroicons/react/24/outline'
import Upload from '../../component/common/upload/Upload'

const NewGraph = () => {
  return (
    <div className="p-6 sm:p-6 space-y-4 w-full">
      <h1 className='text-4xl font-bold'>Create Graph</h1>
      <div className=' my-8  bg-white w-full p-6 rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <section>
              <div className='flex gap-8 mb-2'>
                <div className='bg-slate-100 p-4 rounded-xl flex flex-col gap-2 w-full'>
                  <div className='flex items-center gap-4'>
                    <span className='items-center w-24 text-gray-700'>Title</span>
                      <input  
                        className='ml-1 mb-2 h-8 p-2  w-full bg-slate-200 outline-none relative rounded-md' 
                        placeholder='Title'
                      
                        // value={state.startDate}
                      />                    
                    {/* <div className='flex flex-col sm:flex-row items-center '>
                    </div> */}
                  </div>  
                  <div className='flex items-center gap-4'>
                    <span className='items-center w-24 text-gray-700'>Description</span>
                    <input  
                      className=' mb-2 h-8 p-2 w-full sm:mb-0 bg-gray-200 outline-none rounded-md relative' 
                      placeholder='Description'
                      // value={state.endDate}
                    />
                  </div>        
                </div>
              </div>

              
              <Upload/>
            </section>
            <div className='flex justify-center items-center mt-5'>
              <Button 
                text={"Create Graph"} 
                icon={<PlusIcon className="flex-shrink-0 h-6 w-6 text-white"/>} 
                styling={'bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400  focus:outline-none focus:ring-blue-300 font-large rounded-full text-sm px-8 py-2 w-full duration-150 sm:py-3 active:scale-90 text-md  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}
              />
            </div>
          </div>
          <div>
            <ThumbnailPreview/>
          </div>
        </div>
      </div>
    </div>


  )
}

export default NewGraph