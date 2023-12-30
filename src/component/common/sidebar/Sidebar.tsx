import React, { ReactNode, createContext, useState } from 'react'
import { SidebarContext } from '../../../context/sidebarContext'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

interface Props {
  children?: ReactNode
  // any props that come into the component
}
const Sidebar = ({ children }:Props) => {
  
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronDoubleRightIcon className='h-6 w-6'/> : <ChevronDoubleLeftIcon className='h-6 w-6'/>}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

      </nav>
    </aside>
  )
  
}

export default Sidebar