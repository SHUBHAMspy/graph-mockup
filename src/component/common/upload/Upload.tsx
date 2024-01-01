import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Upload = () => {
  return (
    <div className="extraOutline p-4 bg-white w-full bg-whtie m-auto rounded-lg">
      <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" >
        <CloudArrowUpIcon className='w-24 h-24 text-indigo-500 mx-auto mb-4'/>
        <div className="input_field flex flex-col w-max mx-auto text-center">
            <label>
              <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
              <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
            </label>

            <div className="title text-indigo-500 uppercase">or drop files here</div>
        </div>
      </div>
    </div>
  )
}

export default Upload