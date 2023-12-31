import React, { ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode,
  text: string,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  // any props that come into the component
}
const Button = ({text,icon,handleClick}:ButtonProps) => {
  return (
    <button 
      className="flex justify-center items-center gap-2 text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handleClick}  
    >
      {icon}
      <span className='hidden font-bold md:inline-block'>{text}</span>
    </button>
  )
}

export default Button