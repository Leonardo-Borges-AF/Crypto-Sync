import { useEffect, useState } from 'react'
import { HeaderMenu } from './HeaderMenu.component'
import './header.css'
import logo from '/images/logo-cryptosync.png'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

  return (
    <>
      <div className="md:px-8 md:py-6 px-5 py-6 fixed bg-black z-50 w-full">
        <div className="mx-auto flex justify-between items-center w-full">
          <img src={logo} alt="logoCryptosync" className="max-w-[180px]" />
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:py-3 md:pr-8  p-3 md:pl-[27px] flex items-center justify-center md:gap-2 border-solid border-[1px] md:rounded-[50px] rounded-full bg-transparent md:w-[150px]"
            style={{ borderColor: 'rgba(255, 255, 255, 0.20)' }}
          >
            <div
              className={`mobile-menu ${openMenu ? 'active' : ''}`}
              id="mobile-menu"
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <p className="text-white text-center text-sm font-main font-bold leading-6 hidden md:block">
              Menu
            </p>
          </button>
        </div>
      </div>
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )
}
