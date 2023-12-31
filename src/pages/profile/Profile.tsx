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
import useMetrices from '../../hooks/useMetrices';



const Profile = () => {
  const { userData,loading } = useAuth();
  const user : UserData = userData
  const { graphData,loading:graphLoading } = useGraphs();
  const { metricesData,loading:metricesLoading } = useMetrices();
  // const { recentActivity } = useActivity();
  return (
    <div>   
      <main className="p-6 sm:p-10 space-y-6 w-full">
        <div className="flex flex-col  justify-between space-y-6 md:space-y-0 md:flex-row ">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold">Profile Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 -mb-3">
            <Button text={"Upload"} icon={<ArrowUpTrayIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
            <Button text={"Share"} icon={<ShareIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
            <Button text={"New Graph"} icon={<PlusIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex justify-between items-center h-28 shadow-2xl rounded-xl p-4'>
              <div className='flex flex-col justify-between items-center'>
                <span className="inline-block text-2xl font-bold">{user.subscriptionPlan}</span>
                <span className="block text-gray-500">Plan</span>
              </div>
              <div className='w-[1px] h-16 bg-slate-300'></div>
              <div className='flex flex-col justify-between items-center'>
                <span className="inline-block text-2xl font-bold">{user.active ? 'Active' : 'Expired'}</span>
                <span className="block text-gray-500">Status</span>

              </div>
             
            </div>
            <div className='flex justify-between items-center h-28 shadow-2xl rounded-xl p-4 z-10'>
            <div className='w-[1px] h-16 bg-slate-300'></div>
              <div className='flex flex-col justify-between items-center'>
                <span className="inline-block text-2xl font-bold">{user.usage?.papersCollected}</span>
                <span className="block text-gray-500">Papers Collected</span>

              </div>

            </div>
            
          </section>
          <div className=' w-full md:w-[30%]'>
            <div className='flex flex-col justify-between items-center p-7 rounded-3xl bg-white shadow-xl '>
              <Avatar name={user.name}showAvailability={false} width={'8rem'} height={'8rem'} />
              <h2>{user.name}</h2>
              <span>{user.email}</span>
              <p className='h-24 w-full text-ellipsis overflow-hidden ...'>{user.bio}</p>
            </div>

          </div>

        </div>
    
      </main>
    </div>
  )
}

export default Profile