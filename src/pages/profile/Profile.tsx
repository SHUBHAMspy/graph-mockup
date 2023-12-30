import React from 'react'
import useAuth from '../../hooks/useAuth';
import useGraphs from '../../hooks/useGraphs';
import useActivity from '../../hooks/useActivity';
import Sidebar from '../../component/common/sidebar/Sidebar';
import SidebarItem from '../../component/common/sidebarItem/SidebarItem';
import { BanknotesIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';


const Profile = () => {
  // const { user } = useAuth();
  // const { subscription, graphs } = useGraphs();
  // const { recentActivity } = useActivity();
  return (
    <div className='flex'>   
      <Sidebar>
        <SidebarItem icon={<Squares2X2Icon className='h-6 w-6'/>} text={"Dashboard"}/>
        <SidebarItem icon={<BanknotesIcon className='h-6 w-6'/>} text={"Pricing"}/>
        <SidebarItem icon={<UserIcon className='h-6 w-6'/>} text={"Account Settings"}/>
      </Sidebar>
      <main className="p-6 sm:p-10 space-y-6 w-full">
        <div className="flex flex-col  justify-between space-y-6 md:space-y-0 md:flex-row ">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Profile Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-full mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 lg:mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className='hidden lg:visible'>Upload</span>
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-full ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Share
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-full ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Graph
            </button>
          </div>
        </div>
    
      </main>
    </div>
  )
}

export default Profile