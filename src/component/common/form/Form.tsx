import React from 'react'
import Button from '../button/Button';

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
      <Button text={"Update"}/>
    </form>
  )
}

export default Form