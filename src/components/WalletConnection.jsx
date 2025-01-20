import React from 'react';
import Carousel from './Carousel';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderMobile from './HeaderMobile'
import CarouselMobile from './CarouselMobile'
import FooterMobile from './FooterMobile'
const WalletConnection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToScan = () => {
    navigate("/scan"); // Переход на страницу /about
  };

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
                  className="w-[5%] h-[5%] mx-auto"
              />
            </div>
            <div className='w-[20%] flex flex-col gap-5 mb-8'>
              <h1 className='text-3xl text-white fonts-violet mx-auto text-center'>Generate your unique NFT based on your tokens</h1>
              <p className='text-[#AEB9E1] fonts-mono text-center'>Connect your wallet, and let the magic happen!</p>
            </div>

            <div className="h-[615px] mb-8 sm20:w-[300px] sm75:w-[350px] sm25:w-[390px]">
            <div className="bg-[#0A1330] p-2  w-full border border-[#343B4F] rounded-md h-full sm25:w-[390px] sm20:w-[300px] sm75:w-[350px] sm25:mx-auto sm20:mx-auto sm75:mx-auto">
                {/* Заголовок */}
                <h2 className="text-[28px] font-bold text-white mb-2 mt-10 text-center fonts-violet">Connect Wallet</h2>
                <p className="text-[#AEB9E1] text-center mb-6 fonts-mono">Choose your wallet<br/> to log in</p>
        
                {/* Что такое Wallet */}
                <div className="text-[#AEB9E1] mb-6 flex flex-row justify-center">
                <a href="#" className="flex items-center space-x-2 hover:text-white">
                    <img src="./images/icons/question.png" alt="question" className='w-6 h-6'/>
                    <span className='fonts-mono text-[10px]'>What Is Wallet?</span>
                </a>
                </div>
        
                {/* Список популярных Wallet */}
                <h3 className="text-[#AEB9E1] mb-4 fonts-mono text-sm ">Popular</h3>
                <div className="grid grid-cols-2 gap-2 mb-6 fonts-mono hover:text-white">
 
                      <button className="h-14 w-full flex  items-center space-x-2 bg-transparent border border-[#343B4F] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/metamask.png"
                          alt="MetaMask"
                          className="w-6 h-6"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">MetaMask</span>
                      </button>
                    
                      {/* Trust Wallet */}
                      <button className="h-14 w-full flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/trust.png"
                          alt="Trust Wallet"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">Trust Wallet</span>
                      </button>
                    
                      {/* CoinBase */}
                      <button className="h-14 w-full flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/coinbase.png"
                          alt="CoinBase"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">CoinBase</span>
                      </button>
                    
                      {/* OKX Wallet */}
                      <button className="h-14 w-full flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/okx.png"
                          alt="OKX Wallet"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">OKX Wallet</span>
                      </button>
                    
                      {/* TronLink */}
                      <button className="h-14 flex w-full items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/tronlink.png"
                          alt="TronLink"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">TronLink</span>
                      </button>
                    
                      {/* BITGET */}
                      <button className="h-14 flex w-full items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/bitget.png"
                          alt="BITGET"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">BITGET</span>
                      </button>
                    
                      {/* WalletConnect */}
                      <button className="h-14 col-span-2 w-full flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/wallet.png"
                          alt="WalletConnect"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-xs">WalletConnect</span>
                      </button>
                    </div>
                {/* Кнопка Scan My Wallet */}
                <button
                    className="fonts-violet w-[190px] h-[50px] mx-auto text-white font-bold py-3 rounded-lg flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    >
                    Scan my wallet →
                    </button>
            </div>
        </div>
        <CarouselMobile />
        <div className='mt-4 w-[150px] h-[45px] rounded-lg mx-auto flex flex-row justify-center items-center gap-2 border border-[#343B4F] hover:bg-gray-600 hover:bg-opacity-30'>
            <p className='text-[#AEB9E1] text-sm'>Explore</p>
            <img src="./images/icons/bag.png" alt="bag" className='w-4 h-4'/>
        </div>
        <FooterMobile />
          </div>
        </div>
      ) : 
      (
        <div className="bg-[#0A1330] text-white  h-[840px] flex flex-row items-center justify-center space-x-4 px-4 sm:px-6 lg:px-8 w-full">
        <div className='h-[635px] w-[560px] flex flex-col justify-between'>
            <div className="fonts-violet flex items-center justify-evenly space-x-4 text-sm font-medium text-gray-400">
                <button className="px-4 py-2 rounded-lg border border-[#AEB9E1] bg-[#AEB9E13D] text-[#AEB9E1] w-40">
                    Connect Wallet
                </button>
                <img src="./images/icons/active-arrow.png" alt='active-arrow' />
                <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-36" onClick={goToScan}>
                    Scan Wallet
                </button>
                <img src="./images/icons/non-active-arrow.png" alt='active-arrow' />
                <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-44">
                    NFT Generation
                </button>
            </div>
            <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-700 h-[300px]">
                <h2 className="text-5xl 2xl:text-5xl sm:text-4xl font-bold mb-4 fonts-violet">
                    Generate your<br/>unique NFT based<br/> on your tokens
                </h2>
                <p className="text-[#AEB9E1] text-lg fonts-mono">
                    Connect your wallet, and let<br/> the magic happen!
                </p>
            </div>
            <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-700 h-[250px]">
                <Carousel />
            </div>
        </div>

        <div className='h-[635px] w-[470px] bg-home-ellipse border border-[#343B4F] rounded-md'>
            <div className="bg-[#0A1330] p-8 rounded-lg shadow-lg  w-full h-full max-w-md">
                {/* Заголовок */}
                <h2 className="text-4xl font-bold text-white mb-2 text-center fonts-violet">Connect Wallet</h2>
                <p className="text-[#AEB9E1] text-center mb-6 fonts-mono">Choose your wallet to log in</p>
        
                {/* Что такое Wallet */}
                <div className="text-[#AEB9E1] mb-6 flex flex-row justify-center">
                <a href="#" className="flex items-center space-x-1 hover:text-white">
                    <img src="./images/icons/question.png" alt="question" className='w-6 h-6'/>
                    <span className='fonts-mono'>What Is Wallet?</span>
                </a>
                </div>
        
                {/* Список популярных Wallet */}
                <h3 className="text-[#AEB9E1] mb-4 fonts-mono">Popular</h3>
                <div className="grid grid-cols-2 gap-4 mb-6 fonts-mono hover:text-white">
 
                      <button className="h-14 col-span-2 flex items-center space-x-2 bg-transparent border border-[#343B4F] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/metamask.png"
                          alt="MetaMask"
                          className="w-6 h-6"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">MetaMask</span>
                      </button>
                    
                      {/* Trust Wallet */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/trust.png"
                          alt="Trust Wallet"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">Trust Wallet</span>
                      </button>
                    
                      {/* CoinBase */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/coinbase.png"
                          alt="CoinBase"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">CoinBase</span>
                      </button>
                    
                      {/* OKX Wallet */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/okx.png"
                          alt="OKX Wallet"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">OKX Wallet</span>
                      </button>
                    
                      {/* TronLink */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/tronlink.png"
                          alt="TronLink"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">TronLink</span>
                      </button>
                    
                      {/* BITGET */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/bitget.png"
                          alt="BITGET"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">BITGET</span>
                      </button>
                    
                      {/* WalletConnect */}
                      <button className="h-14 flex items-center space-x-2 bg-transparent border border-[#343B4F] text-[#AEB9E1] px-4 py-2 rounded-lg hover:bg-[#FFFFFF14]">
                        <img
                          src="./images/icons/wallet.png"
                          alt="WalletConnect"
                          className="w-5 h-5"
                        />
                        <span className="hover:text-white text-[#AEB9E1] text-sm">WalletConnect</span>
                      </button>
                    </div>
                {/* Кнопка Scan My Wallet */}
                <button
                    className="fonts-violet w-52 h-14 mx-auto text-white font-bold py-3 rounded-lg flex items-center justify-center text-lg"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    >
                    Scan my wallet →
                    </button>
            </div>
        </div>
    </div>
      )}
    </div>
  );
};

export default WalletConnection;
