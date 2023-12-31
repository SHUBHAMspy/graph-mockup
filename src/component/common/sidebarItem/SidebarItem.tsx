import React, { ReactNode, useContext } from 'react'
import { SidebarContext } from '../../../context/sidebarContext'
import { useNavigate } from 'react-router-dom'

interface Props {
  icon?: ReactNode,
  text: String,
  active?: boolean
  to: string;
  // any props that come into the component
}
const SidebarItem = ({ icon, text, active,to }:Props) => {
  const { expanded } = useContext(SidebarContext)
  const navigate = useNavigate()
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    onClick={() => navigate(to)}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )  
}

export default SidebarItem