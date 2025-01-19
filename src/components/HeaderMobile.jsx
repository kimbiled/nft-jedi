const HeaderMobile = () => {
    return(
        <header className='text-white flex flex-row justify-around items-center w-[290px] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-12'>
          <button
                    className="fonts-violet w-[150px] h-[45px] text-white font-bold rounded-lg flex items-center justify-center text-xs"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    >
                    Scan my wallet →
                    </button>
                    <div className='flex flex-row gap-3'>
                      <div className='w-[45px] h-[45px] border border-[#343B4F] rounded-md flex flex-col items-center justify-center'>
                        <img src="./images/icons/bell.png" alt="bell" className='w-5 h-5'/>
                      </div>
                      <div className='w-[45px] h-[45px] border border-[#343B4F] rounded-md flex flex-col items-center justify-center'>
                        <img src="./images/icons/menu.png" alt="menu" className='w-5 h-3'/>
                      </div>
                    </div>
          </header>
    )
}

export default HeaderMobile;