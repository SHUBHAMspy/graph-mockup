import React, { ReactNode } from 'react'

interface ButtonProps {
  icon?: ReactNode,
  text: string,
  styling?: string
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  // any props that come into the component
}
const Button = ({text,icon,styling,handleClick}:ButtonProps) => {
  return (
    <button 
      className={`flex justify-center items-center gap-2 text-white ${styling} `}
      onClick={handleClick}  
    >
      {icon}
      <span className='hidden font-bold md:inline-block'>{text}</span>
    </button>
  )
}

export default Button