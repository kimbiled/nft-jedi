import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderMobileScan = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickHome = () => {
    navigate("/")
  }
  const onClickConnect= () => {
    navigate("/profile")
  }
  const onClickScan = () => {
    navigate("/scan")
  }

  return (
    <header className='text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-12'>
      <div className='flex flex-row items-center gap-2'>
        <img src="./images/avatars/avatar.png" alt="avatar" className='w-6 h-6' />
        <p className='fonts-mono text-sm'>0x17...85</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"/>
        </svg>

      </div>
      <div className='flex flex-row gap-3'>
        <div className='w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center'>
          <img src="./images/icons/bell.png" alt="bell" className='w-5 h-5' />
        </div>
        <div
          onClick={toggleMenu} // Открытие меню по клику
          className='w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center cursor-pointer'
        >
          <img src="./images/icons/menu.png" alt="menu" className='w-5 h-3' />
        </div>
      </div>

      {/* Поп-ап меню */}
      {isMenuOpen && (
        <div className='absolute top-16 right-0 bg-[#0A1330] w-[70%] p-4 rounded-lg shadow-lg z-10'>
          <div className='flex flex-col gap-4'>
          <button className='text-white font-semibold' onClick={onClickHome}>Home</button>
            <button className='text-white font-semibold' onClick={onClickConnect}>Profile</button>
            <button className='text-white font-semibold' onClick={onClickScan}>Scan Wallet</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobileScan;
