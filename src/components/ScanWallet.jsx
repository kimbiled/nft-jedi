import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMobile from './HeaderMobile'
import CarouselMobile from './CarouselMobile'
import FooterMobile from './FooterMobile'
const ScanWallet = () => {

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile? (
         <div className="flex flex-col items-center h-auto bg-[#081028] overflow-x-hidden max-w-[425px]"
         style={{
           backgroundImage: "url('/images/backgrounds/grid.png')",
           backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера) // Центрирование фона
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat"
         }}>
           <HeaderMobile />
           <div className='flex flex-col items-center justify-center gap-4'>
             <div className='flex flex-row items-center mb-4'>
               <img
                   src="./images/icons/logo.png" // Замените на ваш логотип
                   alt="Logo"
                   className="w-[70px] h-[20px] mx-auto"
               />
             </div>
             <div className='sm20:w-[250px] flex flex-col gap-5 mb-8'>
               <h1 className='text-3xl text-white fonts-violet mx-auto text-center'>Transform Your
Tokens Into
Exclusive NFTs</h1>
               <p className='text-[#AEB9E1] fonts-mono text-center'>Each NFT is uniquely crafted
               based on the coins you hold</p>
             </div>
 
             <div className="h-[715px] mb-8 sm20:w-[300px] sm75:w-[350px] sm25:w-[390px]">
             <div className="bg-[#0A1330] p-2  w-full border border-[#343B4F] rounded-md h-full sm25:w-[390px] sm20:w-[300px] sm75:w-[350px] sm25:mx-auto sm20:mx-auto sm75:mx-auto">
                 {/* Заголовок */}
                 <h2 className="text-[28px] font-bold text-white mb-2 mt-10 text-center fonts-violet">Tokens Detected!</h2>
                 <p className="text-[#AEB9E1] text-center mb-6 fonts-mono">Your Wallet Contents</p>
         
                 {/* <div className="text-[#AEB9E1] mb-6 flex flex-row justify-center">
                 <a href="#" className="flex items-center space-x-2 hover:text-white">
                     <img src="./images/icons/question.png" alt="question" className='w-6 h-6'/>
                     <span className='fonts-mono text-[10px]'>What Is Wallet?</span>
                 </a>
                 </div> */}
         
                 {/* Список популярных Wallet */}
                 <h3 className="text-[#AEB9E1] mb-4 fonts-mono text-sm ">TOP 3 your Tokens</h3>
                 <div className="space-y-2 fonts-mono">
                    {/* PepeCoin */}
                      <div className='flex flex-row gap-2'>
                      <div className="flex flex-row h-20 items-center justify-around rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px] sm20:w-[230px] sm75:w-[275px] sm25:w-[315px]">
                        {/* Основная часть (токены и информация) */}
                        <div className="flex flex-row items-center space-x-4">
                          {/* Изображение */}
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src="./images/icons/pepe.png"
                              alt="PepeCoin"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Информация */}
                          <div className='flex flex-col gap-2'> 
                            <p className="text-white font-bold text-sm flex items-center">
                              PepeCoin <span className="text-yellow-400 ml-1 text-[8px]">★</span>
                            </p>
                            <p className="text-[#AEB9E1] text-[10px]">
                              $975 <span className="text-green-500">+1.98%</span>
                            </p>
                          </div>
                        </div>
                  
                        {/* Количество токенов */}
                        <div >
                          <p className="text-white text-xs">
                            489 PEPE
                          </p>
                        </div>
                  
                        {/* Процент */}
                      </div>
                      <div className="flex-shrink-0 w-12 sm20:w-11 sm75:w-12 sm25:w-14 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
                          55.9%
                        </div>
                      </div>
                  
                      {/* DogeCoin */}
                      <div className='flex flex-row gap-2'>
                      <div className="flex flex-row h-20 items-center justify-around rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px] sm20:w-[230px] sm75:w-[275px] sm25:w-[315px]">
                        {/* Основная часть (токены и информация) */}
                        <div className="flex flex-row items-center space-x-4">
                          {/* Изображение */}
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src="./images/icons/doge.png"
                              alt="DogeCoin"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Информация */}
                          <div className='flex flex-col gap-2'> 
                            <p className="text-white font-bold text-sm flex items-center">
                              DogeCoin
                            </p>
                            <p className="text-[#AEB9E1] text-[10px]">
                              $25 <span className="text-red-500">-7%</span>
                            </p>
                          </div>
                        </div>
                  
                        {/* Количество токенов */}
                        <div >
                          <p className="text-white text-xs">
                            78 DOGE
                          </p>
                        </div>
                  
                        {/* Процент */}
                      </div>
                      <div className="flex-shrink-0 w-12 sm20:w-11 sm75:w-12 sm25:w-14 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
                          37.0%
                        </div>
                      </div>
                  
                      {/* Shiba Inu */}
                      <div className='flex flex-row gap-2'>
                      <div className="flex flex-row h-20 items-center justify-around rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px] sm20:w-[230px] sm75:w-[275px] sm25:w-[315px]">
                        {/* Основная часть (токены и информация) */}
                        <div className="flex flex-row items-center space-x-4">
                          {/* Изображение */}
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src="./images/icons/shiba.png"
                              alt="Shiba"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Информация */}
                          <div className='flex flex-col gap-2'> 
                            <p className="text-white font-bold text-sm flex items-center">
                              Shiba Inu
                            </p>
                            <p className="text-[#AEB9E1] text-[10px]">
                              $5 <span className="text-red-500">-3.74%</span>
                            </p>
                          </div>
                        </div>
                  
                        {/* Количество токенов */}
                        <div >
                          <p className="text-white text-xs">
                            55 SHIB
                          </p>
                        </div>
                  
                        {/* Процент */}
                      </div>
                      <div className="flex-shrink-0 w-12 sm20:w-11 sm75:w-12 sm25:w-14 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
                          7.1%
                        </div>
                      </div>
                    </div>
                    <div>
             <button
                className="fonts-mono mt-4 flex flex-row items-center justify-center sm20:w-[282px] sm25:w-[373px] sm75:w-[330px] h-11  text-[10px] rounded-lg border border-[#343B4F] text-[#AEB9E1] bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/backgrounds/button.png')",
                backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера)
                backgroundPosition: "bottom", // Центрирование фона
                backgroundRepeat: "no-repeat"// Укажите путь к вашему изображению
                }}
              >
                Other Coins <img src="./images/icons/active-arrow.png" alt="active-arrow" width={10} height={10} className='ml-2'/> 
              </button>

              <button className="fonts-mono flex flex-row items-center justify-center mx-auto px-4 py-2 rounded-lg text-[#AEB9E1] mt-3 text-[10px] sm20:w-[282px] sm25:w-[373px] sm75:w-[330px] h-11 rounded-lg border border-[#343B4F] ">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <img
                    src="./images/icons/question.png"
                    alt="?"
                    className="w-6 h-6"
                  />
                </div>
                How to improve the quality of NFTs
              </button>

              <button
                    className="mt-8 w-56 h-14 mx-auto text-white font-bold py-3 rounded-lg flex items-center justify-center fonts-violet "
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    >
                    Generate My NFT →
                    </button>

                    <button className="fonts-mono flex flex-row items-center mx-auto px-4 py-2 rounded-lg text-[#AEB9E1] mt-3 text-[10px] sm20:w-[282px] h-11">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <img
                    src="./images/icons/question.png"
                    alt="?"
                    className="w-6 h-6"
                  />
                </div>
                How to improve the quality of NFTs
              </button>
              </div>
             </div>

             
         </div>
         <div
  className="p-4 rounded-lg shadow-lg border border-gray-700 h-[350px] sm20:w-[300px] sm75:w-[350px] sm25:w-[390px] "
  style={{
    backgroundImage: "url('/images/backgrounds/waves.png')",
    backgroundSize: "130%", // Уменьшение размера фона (например, 120% от исходного размера)
    backgroundPosition: "center 180px", // Центрирование фона
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Заголовок */}
  <h2 className="text-4xl sm20:text-[26px] 2xl:text-[42px] sm:text-4xl font-bold mb-2 text-white fonts-violet sm20:w-[260px] mx-auto mt-8 text-center">
    NFT Sales Analytics
  </h2>

  {/* Подзаголовок */}
  <p className="text-[#AEB9E1] mb-2 fonts-mono text-center sm20:w-[180px] mx-auto">Track the latest NFT trends</p>

  {/* Статистика */}
  <div className="flex justify-between w-full items-center mb-4 fonts-mono flex-col mt-4 gap-4">
    <div className="flex items-center w-full flex-row justify-between">
      <p className="text-[#AEB9E1] text-xs w-[140px]">Total NFTs Sold:</p>
      <div className="bg-[#FFFFFF14] text-xs text-[#AEB9E1] flex items-center justify-center rounded-md border border-[#7E89AC] w-16 h-8">
        10.452
      </div>
    </div>
    <div className="flex items-center w-full flex-row justify-between">
      <p className="text-[#AEB9E1] text-xs w-[170px]">Active NFT Creators:</p>
      <div className="bg-[#FFFFFF14] text-xs text-[#AEB9E1] flex items-center justify-center rounded-md border border-[#7E89AC] w-16 h-8">
        2.925
      </div>
    </div>
  </div>

  {/* Most Popular Token */}
  <div className="fonts-mono relative flex items-center justify-between w-full h-[60px] rounded-md border border-[#343B4F] bg-transparent p-2 backdrop-blur-[24px]">
    <p className="text-[#AEB9E1] text-xs">Most Popular Token:</p>
    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
      <img
        src="./images/icons/pepe.png"
        alt="Pepe Token"
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-white text-xs ">PepeCoin</p>
  </div>
</div>
         <FooterMobile />
           </div>
         </div>
      ) : 
      (
        <div className="bg-[#0A1330] text-white h-[840px] flex flex-row items-center justify-center space-x-4 px-4 sm:px-6 lg:px-8 w-full">
        <div className='h-[635px] w-[560px] flex flex-col justify-between gap-4'>
            <div className="flex items-center justify-evenly space-x-4 text-sm font-medium text-gray-400 fonts-violet">
                <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-40 backdrop-blur-[24px]">
                    Connect Wallet
                </button>
                <img src="./images/icons/non-active-arrow.png" alt='active-arrow' />
                <button className="px-4 py-2 rounded-lg border border-[#AEB9E1] bg-[#AEB9E13D] text-[#AEB9E1] w-36">
                    Scan Wallet
                </button>
                <img src="./images/icons/active-arrow.png" alt='active-arrow' />
                <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-44 backdrop-blur-[24px]">
                    NFT Generation
                </button>
            </div>
            <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-700 h-[265px] flex flex-col justify-center">
                <h2 className="text-4xl 2xl:text-[42px] sm:text-4xl font-bold mb-4 leading-relaxed fonts-violet">
                Transform your tokens<br/>into exclusive NFTs
                </h2>
                <p className="text-[#AEB9E1] text-lg fonts-mono">
                Each NFT is uniquely crafted based<br/>
                on the coins you hold
                </p>
            </div>
            <div
  className="p-8 rounded-lg shadow-lg border border-gray-700 h-[350px]"
  style={{
    backgroundImage: "url('/images/backgrounds/waves.png')",
    backgroundSize: "110%", // Уменьшение размера фона (например, 120% от исходного размера)
    backgroundPosition: "center 90px", // Центрирование фона
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Заголовок */}
  <h2 className="text-4xl 2xl:text-[42px] sm:text-4xl font-bold mb-4 leading-relaxed text-white fonts-violet">
    NFT Sales Analytics
  </h2>

  {/* Подзаголовок */}
  <p className="text-[#AEB9E1] text-lg mb-2 fonts-mono">Track the latest NFT trends</p>

  {/* Статистика */}
  <div className="flex justify-between w-full items-center space-x-8 mb-6 fonts-mono">
    <div className="flex items-center space-x-2 w-full">
      <p className="text-[#AEB9E1] text-sm w-[140px]">Total NFTs Sold:</p>
      <div className="bg-[#FFFFFF14] text-[#AEB9E1] flex items-center justify-center rounded-md border border-[#7E89AC] w-18 h-8 p-1">
        10.452
      </div>
    </div>
    <div className="flex items-center space-x-2 w-full">
      <p className="text-[#AEB9E1] text-sm w-[170px]">Active NFT Creators:</p>
      <div className="bg-[#FFFFFF14] text-[#AEB9E1] flex items-center justify-center rounded-md border border-[#7E89AC] w-18 h-8 p-1">
        2.925
      </div>
    </div>
  </div>

  {/* Most Popular Token */}
  <div className="fonts-mono relative flex items-center justify-between w-[350px] h-[80px] rounded-md border border-[#343B4F] bg-transparent p-[14px] backdrop-blur-[24px]">
    <p className="text-[#AEB9E1] text-sm">Most Popular Token:</p>
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img
        src="./images/icons/pepe.png"
        alt="Pepe Token"
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-white text-sm font-bold">PepeCoin</p>
  </div>
</div>


        </div>

        <div className='h-[635px] w-[470px] bg-home-ellipse border border-[#343B4F] rounded-md'>
            <div className="bg-[#0A1330] p-8 rounded-lg shadow-lg w-full h-full max-w-md">
                {/* Заголовок */}
                <h2 className="text-4xl font-bold text-white mb-2 text-center fonts-violet">Tokens Detected!</h2>
                <p className="text-[#AEB9E1] text-center mb-6 fonts-mono">Your Wallet Contents</p>
        
                {/* Что такое Wallet
                <div className="text-[#AEB9E1] mb-6 flex flex-row justify-center">
                <a href="#" className="flex items-center space-x-1 hover:text-white ">
                    <img src="./images/icons/question.png" alt="question" />
                    <span>What Is Wallet?</span>
                </a>
                </div>
         */}
                {/* Список популярных Wallet */}
                <h3 className="text-[#AEB9E1] mb-4 fonts-mono">TOP 3 your Tokens</h3>
                <div className="rounded-lg shadow-lg">
  {/* Список монет */}
  <div className="space-y-2 fonts-mono">
    {/* PepeCoin */}
    <div className='flex flex-row gap-2'>
    <div className="flex flex-row h-20 items-center justify-between p-4 rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px]">
      {/* Основная часть (токены и информация) */}
      <div className="flex flex-row items-center space-x-4">
        {/* Изображение */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="./images/icons/pepe.png"
            alt="PepeCoin"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Информация */}
        <div>
          <p className="text-white font-bold text-lg flex items-center">
            PepeCoin <span className="text-yellow-400 ml-1">★</span>
          </p>
          <p className="text-[#AEB9E1] text-sm">
            $975 <span className="text-green-500">+1.98%</span>
          </p>
        </div>
      </div>

      {/* Количество токенов */}
      <div>
        <p className="text-white text-sm">
          489 PEPE
        </p>
      </div>

      {/* Процент */}
    </div>
    <div className="flex-shrink-0 w-12 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
        55.9%
      </div>
    </div>

    {/* DogeCoin */}
    <div className='flex flex-row gap-2'>
    <div className="flex flex-row h-20 items-center justify-between p-4 rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px]">
      {/* Основная часть (токены и информация) */}
      <div className="flex flex-row items-center space-x-4">
        {/* Изображение */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="./images/icons/doge.png"
            alt="DogeCoin"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Информация */}
        <div>
          <p className="text-white font-bold text-lg flex items-center">
          DogeCoin <span className="text-yellow-400 ml-1">★</span>
          </p>
          <p className="text-[#AEB9E1] text-sm">
            $25 <span className="text-red-500">-7%</span>
          </p>
        </div>
      </div>

      {/* Количество токенов */}
      <div>
        <p className="text-white text-sm">
          78 DOGE
        </p>
      </div>

      {/* Процент */}
    </div>
    <div className="flex-shrink-0 w-12 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
        37.0%
      </div>
    </div>

    {/* Shiba Inu */}
    <div className='flex flex-row gap-2'>
    <div className="flex flex-row h-20 items-center justify-between p-4 rounded-lg bg-transparent border border-[#343B4F] gap-4 w-[360px]">
      {/* Основная часть (токены и информация) */}
      <div className="flex flex-row items-center space-x-4">
        {/* Изображение */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="./images/icons/shiba.png"
            alt="shibaCoin"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Информация */}
        <div>
          <p className="text-white font-bold text-lg flex items-center">
          Shiba Inu<span className="text-yellow-400 ml-1">★</span>
          </p>
          <p className="text-[#AEB9E1] text-sm">
            $5 <span className="text-red-500">-3.74%</span>
          </p>
        </div>
      </div>

      {/* Количество токенов */}
      <div>
        <p className="text-white text-sm">
          55 SHIB
        </p>
      </div>

      {/* Процент */}
    </div>
    <div className="flex-shrink-0 w-12 h- bg-[#FFFFFF14] flex items-center justify-center text-[#AEB9E1] text-sm rounded-lg border border-[#343B4F]">
        7.1%
      </div>
    </div>
  </div>
</div>

<div className="flex justify-between space-x-4 mt-4">
  {/* Кнопка "Other Coins" */}
  <button
    className="flex items-center justify-center w-[205px] px-4 py-2 rounded-lg border border-[#343B4F] text-[#AEB9E1] bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/backgrounds/button.png')",
    backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера)
    backgroundPosition: "bottom", // Центрирование фона
    backgroundRepeat: "no-repeat"// Укажите путь к вашему изображению
    }}
  >
    Other Coins →
  </button>

  {/* Кнопка "? Generation Fee" */}
  <button className="flex items-center w-[205px] px-4 py-2 rounded-lg border border-[#343B4F] text-[#AEB9E1] bg-transparent">
    {/* Вопросительный знак как изображение */}
    <div className="w-6 h-6 flex items-center justify-center mr-2">
      <img
        src="./images/icons/question.png" // Укажите путь к вашему вопросительному знаку
        alt="?"
        className="w-6 h-6"
      />
    </div>
    Generation Fee
  </button>
</div>

                  <button
                    className="mt-8 w-56 h-14 mx-auto text-white font-bold py-3 rounded-lg flex items-center justify-center text-lg"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    >
                    Generate My NFT →
                    </button>
                    <div className="relative group">
  {/* Кнопка */}
  <button className="flex flex-row items-center mx-auto px-4 py-2 rounded-lg text-[#AEB9E1] mt-3">
    <div className="w-6 h-6 flex items-center justify-center mr-2">
      <img
        src="./images/icons/question.png"
        alt="?"
        className="w-6 h-6"
      />
    </div>
    How to improve the quality of NFTs
  </button>

  {/* Всплывающий элемент */}
  <div className="py-2 px-2 absolute left-[150px] top-full mt-2 w-[390px] h-14 p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    The level and rarity of the NFT increase linearly with the number of tokens in the wallet.
  </div>
</div>


            </div>
        </div>
    </div>
      )}
    </div>
  );
};

export default ScanWallet;
