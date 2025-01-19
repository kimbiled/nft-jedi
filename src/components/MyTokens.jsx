import React from "react";

const MyTokens = () => {
  return (
    <div className="p-6 space-y-6 bg-[#0A1330] h-full">
      {/* Header */}
      <div className="relative flex justify-between items-center mb-14">
        <h1 className="text-3xl fonts-mono500 text-white">My tokens</h1>
        <p className="text-lg text-[#AEB9E1] fonts-mono">/ Overview</p>
        <div className="absolute w-full bottom-[-30px] h-[1px] bg-[#FFFFFF] opacity-20"></div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg border border-[#AEB9E1] bg-[#AEB9E13D] text-[#AEB9E1] w-40">Latest NFT</button>
        <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-32 text-[#AEB9E1] opacity-50">Gallery</button>
        <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-24 text-[#AEB9E1] opacity-50">Sold</button>
        <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-44 text-[#AEB9E1] opacity-50">My Creations</button>
      </div>

      {/* Main Content */}
      <div className="flex flex-row gap-4">
        {/* NFT Card */}
        <div className="flex flex-col gap-5 bg-[#0B1739] p-4 rounded-lg h-[750px] w-[440px] border border-[#343B4F]">
          <div className="mb-4">
            <img src="./images/avatars/pepe.png" alt="pepe" className="w-full h-full"/>
          </div>
          <div className="relative">

            <div className="absolute right-0">
                <img src="./images/icons/more.png" alt="more" className="w-6 h-6"/>
            </div>

            <div className="flex items-center space-x-1">
                <img src="./images/icons/tick.png" alt="tick" className="w-4 h-4" />
                <p className="text-lg text-[#AEB9E1] fonts-mono500">Jdkn00</p>
                </div>
    
                {/* Название */}
            <div className="flex flex-col gap-4"> 
            <p className="text-3xl text-white mt-1 text-left fonts-mono500">
            Pepe2077
            </p>
            <p className="text-lg text-[#AEB9E1] mt-1 text-left fonts-mono">
            A legendary cyber icon, known for<br/> his bold charisma
            </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full fonts-mono">
            <p className="text-[#AEB9E1] text-lg">Total NFTs Sold:</p>
            <div className="text-lg bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[190px]">
                0xab...xyz789
                <img src="./images/icons/copy.png" alt="copy" className="w-5 h-5"/>
            </div>
           </div>
           <button
                    className="w-[155px] h-14 text-white font-bold py-3 rounded-lg flex items-center justify-center text-lg fonts-violet"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)'
                    }}
                    >
                    Mint NFT →
                    </button>
        </div>

        {/* Characteristics */}
        <div className="bg-[#0B1739] p-6 rounded-lg flex flex-col gap-6 h-auto w-[405px] fonts-mono border border-[#343B4F]">
          <div className="relative flex flex-col gap-4">
            <h2 className="text-lg text-white">Characteristics</h2>
            <p className="text-[#AEB9E1]">Features of Your NFT</p>
            <div className="absolute right-0">
                <img src="./images/icons/more.png" alt="more" className="w-6 h-6"/>
            </div>
          </div>
          <div className="flex flex-col gap-4">
          <div className="bg-[#0B1739] rounded-md w-[350px] h-20 border border-[#7E89AC3D] flex flex-row justify-between items-center"
                style={{
                    background: 'linear-gradient(90deg, rgba(84, 220, 183, 0.2) 0%, rgba(84, 220, 183, 0) 100%)'
                }}>
            <div className="flex items-center flex-row">
                <div className="relative flex items-center justify-center">
                <img
                    src="./images/icons/d1.png" // Укажите путь к вашей иконке
                    alt="Legendary Icon"
                    className="w-20 h-20"
                />
                </div>
        
                {/* Текст */}
                <div className="flex flex-col">
                <p className="text-sm text-[#7E89AC]">Legendary</p>
                <p className="text-xl font-bold text-white">Glasses</p>
                </div>
            </div>
        
            {/* Иконка раскрытия */}
            <div className="text-[#AEB9E1] hover:text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </div>
          </div>

          <div className="bg-[#0B1739] rounded-md w-[350px] h-20 border border-[#7E89AC3D] flex flex-row justify-between items-center" 
                style={{
                    background: 'linear-gradient(90deg, rgba(144, 76, 255, 0.2) 0%, rgba(144, 76, 255, 0) 100%)'
                }}>
            <div className="flex items-center flex-row">
                <div className="relative flex items-center justify-center">
                <img
                    src="./images/icons/d2.png" // Укажите путь к вашей иконке
                    alt="Legendary Icon"
                    className="w-20 h-20"
                />
                </div>
        
                {/* Текст */}
                <div className="flex flex-col">
                <p className="text-sm text-[#7E89AC]">Rare</p>
                <p className="text-xl font-bold text-white">Skin Care</p>
                </div>
            </div>
        
            {/* Иконка раскрытия */}
            <div className="text-[#AEB9E1] hover:text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </div>
            </div>

           <div className="bg-[#0A1330] rounded-md w-[350px] h-20 border border-[#7E89AC3D] flex flex-row justify-between items-center"
            style={{
                background: ' linear-gradient(90deg, rgba(156, 145, 105, 0.2) 0%, rgba(156, 145, 105, 0) 100%)'
            }}>
            <div className="flex items-center flex-row">
                <div className="relativeflex items-center justify-center">
                <img
                    src="./images/icons/d3.png" // Укажите путь к вашей иконке
                    alt="Legendary Icon"
                    className="w-20 h-20"
                />
                </div>
        
                {/* Текст */}
                <div className="flex flex-col">
                <p className="text-sm text-[#7E89AC]">Uncommon</p>
                <p className="text-xl font-bold text-white">Accessories</p>
                </div>
            </div>
        
            {/* Иконка раскрытия */}
            <div className="text-[#AEB9E1] hover:text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </div>
            </div>

            <div className="bg-[#0A1330] rounded-md w-[350px] h-[265px] border border-[#7E89AC3D] flex flex-row items-center"
            style={{
                background: ' linear-gradient(90deg, rgba(153, 153, 153, 0.2) 0%, rgba(153, 153, 153, 0) 100%)'
            }}>
        {/* Иконка и текст */}

        <div className="w-20 h-60 ">
            <img
              src="./images/icons/d4.png" // Укажите путь к вашей иконке
              alt="Regular Icon"
              className="w-20 h-20"
            />
          </div>

            <div className="relative w-[260px] h-60 flex flex-col gap-3">
                <div className="flex flex-row">
                        <div className="flex items-center flex-row">
                            <div className="flex flex-col">
                                <p className="text-sm text-[#AEB9E1]">Regular</p>
                                <p className="text-xl font-bold text-white">Haircut</p>
                            </div>
                        </div>
                    {/* Иконка раскрытия */}
                    <div className="absolute right-0 text-[#AEB9E1] hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 15l7-7 7 7"
                            />
                            </svg>
                    </div>
                </div>

                    <div className="flex items-center flex-row gap-3">
                        <div className="text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[50px] h-8">
                        75%
                        </div>
                        <div className="flex items-center flex-row gap-2">
                            <p className="text-sm text-[#7E89AC]">Rarity</p>
                            <div className="h-6 w-6">
                                <img src="./images/icons/question.png" alt="question" />
                            </div>
                        </div>
                    </div>
                
                    {/* Разделительная линия */}
                    <div className="w-60 h-[1px] bg-[#FFFFFF] opacity-20"></div>
                
                    {/* Описание */}
                    <div className="flex flex-col">
                        <p className=" text-white mb-2">Description</p>
                        <p className="text-sm text-[#7E89AC]">
                        The slick, scale-styled "hairstyle" on its head, glowing with
                        confidence and attitude.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#0A1330] rounded-md w-[350px] h-20 border border-[#7E89AC3D] flex flex-row justify-between items-center"
            style={{
                background: ' linear-gradient(90deg, rgba(156, 145, 105, 0.2) 0%, rgba(156, 145, 105, 0) 100%)'
            }}>
            <div className="flex items-center flex-row">
                <div className="relativeflex items-center justify-center">
                <img
                    src="./images/icons/d4.png" // Укажите путь к вашей иконке
                    alt="Legendary Icon"
                    className="w-20 h-20"
                />
                </div>
        
                {/* Текст */}
                <div className="flex flex-col">
                <p className="text-sm text-[#7E89AC]">Uncommon</p>
                <p className="text-xl font-bold text-white">Accessories</p>
                </div>
            </div>
        
            {/* Иконка раскрытия */}
            <div className="text-[#AEB9E1] hover:text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </div>
            </div>
          </div>
        </div>

        {/* Token Ratio */}
        <div className="bg-[#0B1739] p-6 rounded-lg flex flex-col h-[750px] w-[320px] border border-[#343B4F] fonts-mono">
            <div className="relative flex flex-col gap-4 mb-8">
                <h2 className="text-lg text-white">Token ratio</h2>
                <p className="text-[#AEB9E1]">Your Top Tokens</p>
                <div className="h-8 absolute right-0 text-lg bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[110px]">
                Export
                <img src="./images/icons/download.png" alt="copy" className="w-4 h-4"/>
            </div>
            </div>
          <div className="w-full h-[250px] mb-4 flex justify-center items-center flex-col">
            <img src="./images/avatars/circle.png" alt="circlePepe" width={209} height={209}/>
          </div>
         
          <div className="flex flex-col gap-3 mb-12">
          <div className="bg-[#AEB9E114] w-[265px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-2 w-2 rounded-full bg-[#CB3CFF]"></div>
                <div className="flex flex-col">
                    <p className="text-lg text-white">PepeCoin</p>
                    <p className="text-sm text-[#AEB9E1]">Dominant token</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-white text-lg">55.9%</p>    
            </div>            
            </div>
            <div className="bg-transparent w-[265px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-2 w-2 rounded-full bg-[#0E43FB]"></div>
                <div className="flex flex-col">
                    <p className="text-lg text-white">DogeCoin</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-white text-lg">37.0%</p>    
            </div>            
            </div>
            <div className="bg-transparent w-[265px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-2 w-2 rounded-full bg-[#00C2FF]"></div>
                <div className="flex flex-col">
                    <p className="text-lg text-white">Shiba Inu</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-white text-lg">7.1%</p>    
            </div>            
            </div>
          </div>
          <div className="flex flex-col">
                <p className="text-[#AEB9E1] text-lg">See All →</p>
                <p className="text-[#AEB9E1] opacity-50">+43 Other Tokens</p>
          </div>
        </div>

        {/* Agent Rarity */}
        <div className=" h-[750px] w-[280px] flex flex-col gap-4 fonts-mono">
          <div className="relative w-[280px] h-[180px] rounded-lg p-3 border border-[#343B4F]"
          style={{
            backgroundImage: "url('/images/backgrounds/crystal.png')",
            backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера)
            backgroundPosition: "center", // Центрирование фона
            backgroundRepeat: "no-repeat"
          }}>
            <div className="flex flex-col gap-3 p-4">
                <p className="text-lg text-[#AEB9E1]">Agent Rarity</p>
                <p className="text-3xl text-white">Rare</p>
                <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[96px]">
                03-101-01
                </div>
            <img src="./images/icons/question.png" alt="question" className="h-6 w-6 absolute right-4 top-5"/>
            </div>
          </div>

          <div className="h-[550px] w-[280px] rounded-lg border border-[#343B4F] flex flex-col items-center justify-center gap-3"
          style={{
            backgroundImage: "url('/images/backgrounds/stars.png')",
            backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера) // Центрирование фона
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
            <h2 className="text-[28px] text-white">Boost Rarity</h2>
            <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[65px]">
                Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTokens;
