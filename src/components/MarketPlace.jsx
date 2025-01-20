import React, {useState} from "react";

const MarketPlace = () => {

    const [selectedTime, setSelectedTime] = useState("24H");
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const nfts = [
        { id: 1, name: "Pepe of the Moon", user: "CryptoWizard87", price: "8.5 ETH", bid: "No Bids Yet", image: "./images/avatars/a1.png" },
        { id: 2, name: "Shiba Samurai", user: "PixelPepeX", price: "1 ETH", bid: "No Bids Yet", image: "./images/avatars/a2.png" },
        { id: 3, name: "PonkeX Trip", user: "ElonMinter420", price: "1.5 ETH", bid: "No Bids Yet", image: "./images/avatars/a3.png" },
        { id: 4, name: "Rocket PENG", user: "MetaFroggo", price: "9 ETH", bid: "No Bids Yet", image: "./images/avatars/a4.png" },
        { id: 5, name: "Doge Dynasty", user: "MoonShibaArt", price: "5 ETH", bid: "No Bids Yet", image: "./images/avatars/a5.png" },
        { id: 6, name: "Pixel Pop Dream", user: "DukeN5", price: "2 ETH", bid: "No Bids Yet", image: "./images/avatars/a6.png" },
        { id: 7, name: "Frogchain Legend", user: "RareMinter23", price: "3 ETH", bid: "No Bids Yet", image: "./images/avatars/a7.png" },
        { id: 8, name: "Ponke 2R", user: "ApeLordNFT", price: "4 ETH", bid: "No Bids Yet", image: "./images/avatars/a8.png" },
    ];
  return (
    <div className="p-10 space-y-6 bg-[#0A1330] h-full">
      {/* Header */}
      <div className="relative flex justify-between items-center mb-14">
        <h1 className="text-3xl fonts-mono500 text-white">Marketplace</h1>
        <p className="text-lg text-[#AEB9E1] fonts-mono">/ Explore</p>
        <div className="absolute w-full bottom-[-30px] h-[1px] bg-[#FFFFFF] opacity-20"></div>
      </div>

      {/* Tabs */}
    <div className="flex flex-row items-center justify-between">
            <div className="flex items-center bg-[#0A1330] w-2/5 h-[50px] gap-4">
                <div className="bg-[#FFFFFF14] cursor-pointer w-10 h-10 rounded-lg flex flex-row items-center justify-center">
                    <img src="./images/icons/setting.png" alt="filter" className="w-6 h-6" />
                </div>
        
            {/* Поле ввода */}
            <div className="relative w-full">
                    {/* Иконка поиска */}
                    <img
                        src="./images/icons/search.png"
                        alt="search"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                    />
                    
                    {/* Поле ввода */}
                    <input
                        type="text"
                        placeholder="Search by marketplace..."
                        className="text-[#AEB9E1] opacity-50 flex-1 bg-transparent placeholder-[#AEB9E1] pl-10 pr-4 outline-none border border-[#AEB9E17A] rounded-lg h-10 w-full"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2 bg-[#0A1330] p-2 rounded-lg h-[50px]">
                {/* Trending Dropdown */}
                <button className="flex items-center space-x-2 px-4 py-2 border border-[#343B4F] rounded-lg hover:bg-[#1A233A] h-10">
                    <span className="text-[#AEB9E1] text-opacity-50">Trending</span>
                    <span className="text-[#AEB9E1] text-opacity-50">▾</span>
                </button>
                
                {/* All и фильтры */}
                <div className="flex items-center space-x-2 border border-[#343B4F] rounded-lg h-10">
            {/* Кнопка All */}
            <button
                onClick={() => setSelectedFilter("All")}
                className={`px-4 py-2 text-[#AEB9E1] ${
                    selectedFilter === "All"
                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                }`}
            >
                All
            </button>

            {/* Кнопка с иконкой Crystal */}
            <button
                onClick={() => setSelectedFilter("Crystal")}
                className={`px-4 py-2 rounded-lg ${
                    selectedFilter === "Crystal"
                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                }`}
            >
                <img
                    src="./images/icons/crystal.png"
                    alt="Ethereum"
                    className="w-5 h-5"
                />
            </button>

            {/* Кнопка с иконкой Cube */}
            <button
                onClick={() => setSelectedFilter("Cube")}
                className={`px-4 py-2 rounded-lg ${
                    selectedFilter === "Cube"
                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                }`}
            >
                <img
                    src="./images/icons/cube.png"
                    alt="BNB"
                    className="w-7 h-7"
                />
            </button>
        </div>
                
                {/* Временные фильтры */}
                <div className="flex items-center space-x-2 border border-[#343B4F] rounded-lg h-10">
            {["1H", "6H", "24H", "7D"].map((time) => (
                <button
                    key={time}
                    onClick={() => setSelectedTime(time)} // Изменяем состояние при клике
                    className={`px-4 py-2 text-[#AEB9E1] ${
                        selectedTime === time
                            ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                            : " hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50" // Неактивный стиль
                    }`}
                >
                    {time}
                </button>
            ))}
        </div>
                
                {/* Grid View */}
                <div className="bg-[#FFFFFF14] cursor-pointer w-10 h-10 rounded-lg flex flex-row items-center justify-center">
                    <img src="./images/icons/square.png" alt="filter" className="w-6 h-6" />
                </div>
                </div>
    </div>


      {/* Main Content */}
      <div className="flex flex-row gap-4">
        {/* NFT Card */}
        <div className="flex flex-col gap-4 p-4 text-[#AEB9E1] w-1/6">
            {/* Первый блок */}
            <div className="space-y-4 border border-[#343B4F] rounded-lg p-4 w-">
                <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                    <span className="mb-3">Blockchain</span>
                    <span className="mb-3">›</span>
                </div>
                <div className="flex flex-col justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                    <div className="flex flex-row w-full justify-between items-center cursor-pointer">
                        <span className="mb-3">Status</span>
                        <span className="mb-3">›</span>
                    </div>
                    <div className="flex flex-row justify-between items-center border border-[#343B4F] rounded-lg h-10 text-sm mb-4 w-full">
    {["All", "Buy Now", "Live"].map((stat) => (
        <button
            key={stat}
            onClick={() => setSelectedStatus(stat)} // Изменяем состояние при клике
            className={`text-[#AEB9E1] w-20 h-9 flex items-center justify-center rounded-lg ${
                selectedStatus === stat
                    ? "bg-[#FFFFFF0A] text-opacity-100" // Активный стиль
                    : "hover:bg-[#FFFFFF0A] text-opacity-50" // Неактивный стиль
            }`}
        >
            {stat}
        </button>
    ))}
</div>

                
                </div>
                <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                    <span className="mb-3">Price</span>
                    <span className="mb-3">›</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                    <span className="mb-3">Type</span>
                    <span className="mb-3">›</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                    <span className="mb-3">Options</span>
                    <span className="mb-3">›</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                    <span className="mb-3">Collections</span>
                    <span className="mb-3">›</span>
                </div>
            </div>

            {/* Второй блок */}
            <div className="space-y-4 border border-[#343B4F] rounded-lg p-4">
                <h3 className="text-lg font-bold">Transaction analysis</h3>
                <p>In the last 24 hours</p>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                            {/* Полукруг */}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                            7K
                        </div>
                    </div>
                </div>
                <p className="text-center">Transactions</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#AEB9E1] w-[65%]">
    {nfts.map((nft) => (
        <div
            key={nft.id}
            className="border border-[#343B4F] rounded-lg p-4  hover:shadow-lg transition-shadow"
        >
            <img
                src={nft.image}
                alt={nft.name}
                className="object-cover rounded-lg mb-4 w-[200px] h-[200px] mx-auto"
            />
            <h3 className="text-sm font-bold mb-2">{nft.name}</h3>
            <p className="text-xs text-opacity-75">@{nft.user}</p>
            <div className="flex justify-between mt-4 text-xs">
                <div>
                    <p className="text-opacity-50">Price</p>
                    <p className="font-bold">{nft.price}</p>
                </div>
                <div>
                    <p className="text-opacity-50">Highest Bid</p>
                    <p>{nft.bid}</p>
                </div>
            </div>
        </div>
    ))}
</div>

      </div>
    </div>
  );
};

export default MarketPlace;
