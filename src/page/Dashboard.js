import React from 'react';
import MainDas from '../Component/Dashbord/Main/MainDas';
import SideBar from '../Component/Dashbord/Main/SideBar';

function Dashboard() {
  return (
    <div className=' relative h-screen font-[Poppins]'>
      <SideBar />
      <MainDas />
    </div>
  );
}

export default Dashboard;
