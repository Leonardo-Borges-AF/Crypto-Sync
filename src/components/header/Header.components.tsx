import './header.css'
import logo from '/images/logo-cryptosync.png'

export const Header = () => {

  return (
    <>
      <div className="md:px-8 md:py-6 px-5 py-6 fixed bg-black z-50 w-full">
        <div className="mx-auto flex justify-between items-center w-full">
          <img src={logo} alt="logoCryptosync" className="max-w-[180px] h-[44px]" />
          <a href="" className='hidden md:block text-[#EFEFEF] font-light font-main '>Solutions</a>
          <a href="#reports-section" className='hidden md:block text-[#EFEFEF] font-light font-main '>Reports</a>
          <a href="#pricing" className='hidden md:block text-[#EFEFEF] font-light font-main '>Princing</a>
          <a href="#discord" className='hidden md:block text-[#EFEFEF] font-light font-main '>Community</a>
          <button className='bg-[#6438F4] items-center text-white font-main font-bold md:px-16 md:py-3  px-7 py-1 rounded-full hover:rounded-lg'>
            START NOW
          </button>

        </div>
      </div>
      
    </>
  )
}
