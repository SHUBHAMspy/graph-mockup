import React from 'react'
import useAuth from '../../hooks/useAuth';
import useGraphs from '../../hooks/useGraphs';
import useActivity from '../../hooks/useActivity';
import Sidebar from '../../component/common/sidebar/Sidebar';
import SidebarItem from '../../component/common/sidebarItem/SidebarItem';
import { ArrowUpTrayIcon, BanknotesIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlusIcon, ShareIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';
import Button from '../../component/common/button/Button';
import { UserData } from '../../data/userData';
import Avatar from '../../component/common/avatar/Avatar';



const Profile = () => {
  const { userData,loading } = useAuth();
  const user : UserData = userData
  const { graphData,loading:graphLoading } = useGraphs();
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
            <h1 className="text-4xl font-semibold">Profile Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 -mb-3">
            <Button text={"Upload"} icon={<ArrowUpTrayIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
            <Button text={"Share"} icon={<ShareIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
            {/* inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-full ml-6 mb-3*/}
            <Button text={"New Graph"} icon={<PlusIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
          </div>
        </div>
        <div className='flex'>
          <section className='grid md:grid-cols-2 gap-6'>
            <div></div>
            <div></div>
          </section>
          <div className='w-[30%]'>
            <div className='flex flex-col justify-center items-center p-7 rounded-3xl bg-slate-800 shadow-xl '>
              <Avatar name={user.name}showAvailability={false} width={'8rem'} height={'8rem'} />
              <h2>{user.name}</h2>
              <span>{user.email}</span>
              <p>{user.bio}</p>
            </div>

          </div>

        </div>
    
      </main>
    </div>
  )
}

export default Profile