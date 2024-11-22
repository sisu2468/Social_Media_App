// app/home/page.tsx
import React from 'react';
import LeftSidebar from '../common/leftside/leftsidebar';
import RightSideBar from '../common/rightside/rightsidebar';
import Header from '../common/header';
import FooterBar from '@/app/common/footer'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='bg-[#edf2f6] w-full h-screen pt-[30px] flex'>
        <LeftSidebar />
        <div className='m-auto px-[15px]'>
          <div className='flex justify-center items-center'>

          </div>
        </div>
        <RightSideBar />
      </div>
      <FooterBar />
    </div>
  );
};

export default HomePage;
