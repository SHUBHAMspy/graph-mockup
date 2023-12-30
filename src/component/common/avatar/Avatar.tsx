import React from 'react'
import { generateRandomColor, getInitials } from '../../../utils';

interface AvatarProps {
  name: string;
  showAvailability: boolean;
  width: string;
  height: string;
  isAvailable?: boolean
}
const Avatar = ({name,showAvailability,width,height,isAvailable}:AvatarProps) => {
  return (
    <div 
      className='flex justify-center items-center relative font-bold rounded-full text-3xl text-white'
      style={{
        backgroundColor: generateRandomColor(),
        width: width,
        height: height
      }}
    >
      {getInitials(name)}
      {showAvailability ? <div className={`absolute rounded-full bottom-0 right-0 h-1.5 w-1.5 outline-1 outline outline-white ${isAvailable ? 'bg-green-500': 'bg-slate-600' }`}></div> : null}
      
    </div>
  )
}

export default Avatar