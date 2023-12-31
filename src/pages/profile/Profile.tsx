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
import { useNavigate } from 'react-router-dom';
import { Graph } from '../../data/graphData';



const Profile = () => {
  const { userData,loading } = useAuth();
  const { graphData,loading:graphLoading } = useGraphs();
  const user : UserData = userData
  const graphs : Graph[] = graphData
  // const { recentActivity } = useActivity();
  const navigate = useNavigate()
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
            <Button 
              text={"New Graph"} 
              icon={<PlusIcon className="flex-shrink-0 h-6 w-6 text-white"/>}
              handleClick={() => navigate('/new-graph')}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6  items-center md:items-start'>
          <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex justify-between items-center  shadow-2xl rounded-xl p-4'>
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
              <div className='flex gap-2 items-center  shadow-2xl rounded-xl p-4 z-10 bg-white'>
                <div className='flex flex-col gap-2 items-center'>
                  <span className="inline-block text-2xl font-bold">{user.usage?.graphsCreated}</span>
                  <span className="block text-gray-500">Graphs Created</span>

                </div>
                <div className='w-[1px] h-16 bg-slate-300'></div>
                <div className='flex flex-col gap-2 items-center'>
                  <span className="inline-block text-2xl font-bold">{user.usage?.graphsShared}</span>
                  <span className="block text-gray-500">Graphs Shared</span>

                </div>
                <div className='w-[1px] h-16 bg-slate-300'></div>
                <div className='flex flex-col gap-2 items-center'>
                  <span className="inline-block text-2xl font-bold">{user.usage?.papersCollected}</span>
                  <span className="block text-gray-500">Papers Collected</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 mt-10 '>
              <h2 className="text-2xl font-bold">Saved Graphs</h2>
              {
                graphs.map((graph,index) => (
                  <div  key={index} className='flex flex-row justify-between w-full bg-white p-4 shadow-2xl rounded-xl'>
                    <div className='flex flex-col justify-between'>
                      <h3 className='text-lg font-bold'>{graph.title}</h3>
                      <span className='text-gray-500'>{graph.dateCreated}</span>
                    </div>
                    <div
                      className='h-16 w-16 rounded-xl'
                      style={{
                        backgroundImage: `url(${graph.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                    </div>                       
                  </div>
                ))
              }
            </div> 
          </section>
          <div className=' w-full md:w-[30%]'>
            <div className='flex flex-col justify-between items-center p-7 rounded-3xl bg-white shadow-xl '>
              <Avatar name={user.name}showAvailability={false} width={'8rem'} height={'8rem'} />
              <h2 className='text-lg font-bold'>{user.name}</h2>
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