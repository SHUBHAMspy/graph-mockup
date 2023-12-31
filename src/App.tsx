import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile/Profile';
import Navbar from './component/navbar/Navbar';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Sidebar from './component/common/sidebar/Sidebar';
import SidebarItem from './component/common/sidebarItem/SidebarItem';
import { BanknotesIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';

function App() {
  const elements = useRoutes(routes);

  return (
    <div className="bg-gray-100">
      <Navbar/>
      <div className='flex'>
        <Sidebar>
          <SidebarItem icon={<Squares2X2Icon className='h-6 w-6'/>} text={"Dashboard"} to={'/'}/>
          <SidebarItem icon={<BanknotesIcon className='h-6 w-6'/>} text={"Pricing"} to={'/pricing'}/>
          <SidebarItem icon={<UserIcon className='h-6 w-6'/>} text={"Account Settings"} to={'/account'}/>
        </Sidebar>
        {elements}
      </div>
    </div>
  );
}

export default App;
