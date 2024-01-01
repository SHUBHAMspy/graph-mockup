import React from 'react'
import Button from '../button/Button';
import { PencilIcon } from '@heroicons/react/24/outline';

interface Field{
  label: string;
  value?: string
}

interface FieldsProps{
  fields: Array<Field>
}

const Form = ({fields}: FieldsProps) => {
  return (
    <form >
      {
        fields.map((field,index:number) => (
          <div key={index} className='mb-4'>
            <label htmlFor="" className='text-sm font-bold text-gray-600'>{field.label}</label>
            <input type="text" value={field.value ? field.value : '' } className='w-full p-2 border border-gray-300 rounded-full mt-1' />
          </div>
        ))
      }
      <Button 
        text={"Update"} 
        icon={<PencilIcon 
        className="flex-shrink-0 h-6 w-6 text-white"/>}
        styling={'bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}
      />
    </form>
  )
}

export default Form