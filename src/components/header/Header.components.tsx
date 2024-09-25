import './header.css'
import logo from '/images/logo-cryptosync.png'




export const Header = () => {

  
  return (
    <>
      <div className="md:px-8 md:py-6 px-5 py-6 fixed bg-black z-50 w-full">
        <div className="mx-auto flex justify-between items-center w-full">
          <img
            src={logo}
            alt="logoCryptosync"
            className="max-w-[180px] h-[44px]"
          />
          <div className='hidden md:flex items-center gap-28'>
            <a
              href="#cards-section"
              className="hidden md:block text-[#EFEFEF] font-light font-main transition-all duration-500 ease-in-out hover:text-[#6438F4]"
            >
              Solutions
            </a>
            <a
              href="#reports-section"
              className="hidden md:block text-[#EFEFEF] font-light font-main transition-all duration-500 ease-in-out hover:text-[#6438F4]"
            >
              Reports
            </a>
            <a
              href="#pricing"
              className="hidden md:block text-[#EFEFEF] font-light font-main transition-all duration-500 ease-in-out hover:text-[#6438F4]"
            >
              Princing
            </a>
            <a
              href="#questions"
              className="hidden md:block text-[#EFEFEF] font-light font-main transition-all duration-500 ease-in-out hover:text-[#6438F4]"
            >
              FAQ
            </a>
    
          </div>

          <a href="https://app.cryptosync.com.au/checkout/cryptosync-premium">
            <button 
              className="bg-[#6438F4] relative items-center text-white font-main font-bold md:px-16 md:py-3  px-7 py-1 rounded-3xl transition-all duration-500 ease-in-out hover:rounded-lg">
              <div className='absolute top-0 left-0 bg-white size-[2px] rounded-full'/>
              <div className='absolute bottom-0 right-0 bg-white size-[2px] rounded-full'/>
              <div className='absolute bottom-0 left-0 bg-white size-[2px] rounded-full'/>
              <div className='absolute top-0 right-0 bg-white size-[2px] rounded-full'/>
              Be Premium
            </button>
          </a>
          

           
          
        </div>
      </div>
    </>
  )
}
