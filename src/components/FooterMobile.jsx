import React from 'react';

const FooterMobile = () => {
  return (
    <footer className="mt-6 bg-[#090C21] text-[#AEB9E1] py-8 px-6 rounded-t-lg w-[420px] rounded-t-3xl h-[450px] flex flex-col gap-6 fonts-mono">
      {/* Верхняя часть футера */}
      <div className="flex items-center justify-between mb-6 mt-8 p-2">
        {/* Кнопка "Return to site" */}
        <button className="w-[160px] h-[45px] flex items-center justify-center space-x-2 border border-[#343B4F] rounded-lg hover:bg-gray-700 text-white">
          <span>←</span>
          <span className='text-xs'>Return to site</span>
        </button>

        {/* Иконка */}
        <button className="p-3 border border-[#343B4F] rounded-lg hover:bg-gray-700">
          <img src="./images/icons/crystal.png" alt="crystal" className='w-4 h-4' />
        </button>
      </div>

      {/* Логотип */}
      <div className="flex items-center mb-6">
        <img
          src="./images/icons/logo.png"
          alt="Logo"
          className="w-8 h-4 mr-4"
        />
        <p className="text-white font-bold text-lg">DegenAI</p>
      </div>

      {/* Политика и условия */}
      <div className="flex flex-col gap-6 mb-2 opacity-50">
        <p className="hover:text-white cursor-pointer ">Privacy Policy</p>
        <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
      </div>

      {/* Копирайт */}
      <div className="text-xs opacity-50">
        <p>© 2025 DEGENTS. All rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
