import React from 'react'
import Avatar from '../../component/common/avatar/Avatar'
import { UserData } from '../../data/userData';
import useAuth from '../../hooks/useAuth';
import Button from '../../component/common/button/Button';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Form from '../../component/common/form/Form';

const AccountPage = () => {
  const { userData,loading } = useAuth();
  const user : UserData = userData
  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold '>Account</h1>
      <section className='flex flex-col md:flex-row gap-10 py-6 border-b border-slate-300'>
        <div className='flex flex-col gap-2'>
          <h3>Personal Information</h3>
          <p>Use a permanent address where you can receive mail.</p>
        </div>
        <div className='w-full'>
          <div className='flex gap-10 items-center'>
            <Avatar name={user.name}showAvailability={false} width={'6rem'} height={'6rem'} />
            <div className='flex flex-col'>
              <Button text={"Upload"} icon={<ArrowUpTrayIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
              <p className='text-sm'>PG, GIF or PNG. 1MB max.</p>
            </div>
          </div>
          <Form
            fields={[
              {
                label: 'Name',
                value: user.name
              },
              {
                label: 'Email',
                value: user.email
              },
              {
                label: 'Bio',
                value: user.bio
              },
            ]}
          />

        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-10 py-6 border-b border-slate-300'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-bold'>Change Password</h3>
          <p className='text-sm  text-gray-500'>Update your password associated with your account.</p>
        </div>
        <div>
          <Form
            fields={[
              {
                label: 'Current Password',
              },
              {
                label: 'New Password',
              },
              {
                label: 'Confirm Password',

              },
            ]}
          />

        </div>
      </section>

      
    </div>
  )
}

export default AccountPage