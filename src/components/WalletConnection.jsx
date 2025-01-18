import React from 'react';
import Carousel from './Carousel';
import lightGlow from '../assets/backgrounds/light.png'
import { useNavigate } from "react-router-dom";
const WalletConnection = () => {
  const navigate = useNavigate();

  const goToScan = () => {
    navigate("/scan"); // Переход на страницу /about
  };

  return (
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
  );
};

export default WalletConnection;
