import './header.css'
import logo from '/images/logo-cryptosync.png'

export const Header = () => {

  return (
    <>
      <div className="md:px-8 md:py-6 px-5 py-6 fixed bg-black z-50 w-full">
        <div className="mx-auto flex justify-between items-center w-full">
          <img src={logo} alt="logoCryptosync" className="max-w-[180px] h-[44px]" />
          <a href="" className='text-[#EFEFEF] font-light font-main '>Solutions</a>
          <a href="#reports-section" className='text-[#EFEFEF] font-light font-main '>Reports</a>
          <a href="#pricing" className='text-[#EFEFEF] font-light font-main '>Princing</a>
          <a href="#discord" className='text-[#EFEFEF] font-light font-main '>Community</a>
          <button className='rounded-full bg-[#6438F4] px-12 py-3 text-white font-main font-bold items-center hover:rounded-md transition duration-[10000ms] ease-in-out'>
            START NOW
          </button>
        </div>
      </div>
      
    </>
  )
}
