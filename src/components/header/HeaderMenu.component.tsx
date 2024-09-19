import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import plane from '/images/icons/planeMenu.png'
import Reports from '/images/icons/SubtractMenu.png'
import Hub from '/images/icons/hub.png'
import Image from '/images/Headerimage.webp'
type TProps = {
  openMenu: boolean
  setOpenMenu: (value: boolean) => void
}

export const HeaderMenu = ({ openMenu, setOpenMenu }: TProps) => {
  return (
    <>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`fixed hidden lg:block bg-black bg-opacity-70 left-0 w-full h-full z-[98] duration-300 ${
          openMenu ? 'opacity-100' : '-z-[98] opacity-0 !hidden'
        }`}
      ></div>
      <div
        className={`fixed top-0 overflow-y-auto pb-0 flex z-[99] ease-in duration-500 flex-row w-full h-full ${
          openMenu ? '!right-0' : '-right-full'
        }`}
      >
        <div 
          className='lg:h-full flex gap-3 py-12 px-8'
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex flex-col gap-8 p-6 rounded-2xl bg-[#0C0C0D] bg-opacity-85 w-[266px] h-[557px] backdrop-blur-sm'>
            <div className='flex items-center justify-center bg-[#0A0A11] rounded-full size-[91.3px]'>
              <img src={plane} className='w-[50px] h-[41px]' />
            </div>
            <h3 className='font-semibold text-[28px] font-main text-white'>
              Telegram
            </h3>
            <p className='text-[#A1A1AA] text-opacity-80 font-main'>
              You’ll get everything through our exclusive members-only Telegram channel. Right after subscribing, you’ll receive a unique link to access the best market signals and analyses, along with a tutorial on how to follow them effectively.
            </p>
            <a href="#telegram">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="hidden lg:flex px-4 py-3 justify-center items-center g rounded-full bg-[#6438F4] hover:bg-[#2D09A5] duration-300 z-50 w-full mt-auto"
              >
                <p className="text-white  font-main text-base font-medium leading-6 ">
                  Join Telegram Free
                </p>
              </button>
            </a>
            
          </div>
          <div className='flex flex-col gap-8 p-6 rounded-2xl bg-[#0C0C0D] bg-opacity-85 w-[266px] h-[557px] backdrop-blur-sm'>
            <div className='flex items-center justify-center bg-[#0A0A11] rounded-full size-[91.3px]'>
              <img src={Reports} className='w-9 h-[43px]' />
            </div>
            <h3 className='font-semibold text-[28px] font-main text-white'>
              Reports
            </h3>
            <p className='text-[#A1A1AA] text-opacity-80 font-main'>
              Take advantage of our free monthly report. As a member, you'll receive a weekly report and research on the top crypto assets, keeping you fully synced with the crypto market.            
            </p>
            <a href="#news" className='hidden lg:flex px-4 py-3 justify-center items-center rounded-full z-50 w-full mt-auto'>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="hidden lg:flex px-4 py-3 justify-center items-center rounded-full bg-[#6438F4] hover:bg-[#2D09A5] duration-300 z-50 w-full mt-auto"
              >
                <p className="text-white  font-main text-base font-medium leading-6 ">
                  Sign Up
                </p>
              </button>
            </a>
            
          </div>
          <div className='flex flex-col gap-8 p-6 rounded-2xl bg-[#0C0C0D] bg-opacity-85 w-[266px] h-[557px] backdrop-blur-sm'>
            <div className='flex items-center justify-center bg-[#0A0A11] rounded-full size-[91.3px]'>
              <img src={Hub} className='w-[53px] h-[60px]' />
            </div>
            <h3 className='font-semibold text-[28px] font-main text-white'>
              Sync Hub
            </h3>
            <p className='text-[#A1A1AA] text-opacity-80 font-main'>
              Our platform brings everything you need into one place—news, research, signals, thematic portfolios, and reports—offering an intelligent way to access all the data and opportunities in the crypto market.            
            </p>
            <a href="#news" className='hidden lg:flex px-4 py-3 justify-center items-center rounded-full z-50 w-full mt-auto'>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="hidden lg:flex px-4 py-3 justify-center items-center g rounded-full bg-[#6438F4] hover:bg-[#2D09A5] duration-300 z-50 w-full mt-auto"
              >
                <p className="text-white  font-main text-base font-medium leading-6 ">
                  Register Now
                </p>
              </button>
            </a>
            
          </div>
        </div>
        {/* <div
          className="flex justify-center items-center p-6 lg:p-12 lg:h-full w-full lg:w-[50%] bg-blue-400"
          style={{
            backgroundImage: `url(${people3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="flex flex-row lg:flex-col gap-6 bg-[#0C0C0D] bg-opacity-85 w-full h-full rounded-xl p-6 lg:p-10 lg:py-12"
            style={{
              backdropFilter: 'blur(5px)',
            }}
          >
            <div className="flex flex-col gap-3 lg:gap-6 w-full">
              <div className="flex flex-row lg:flex-col gap-6 items-center">
                <div className="rounded-full bg-background-primary w-[30px] h-[30px]  lg:w-[90px] lg:h-[90px] flex items-center justify-center lg:mr-auto">
                  <img
                    src={plane}
                    alt=""
                    className="-ml-1 lg:-ml-2 lg:mt-1 w-4 lg:w-7 h-auto"
                  />
                </div>
                <h1 className="flex flex-col text-white font-main text-xl lg:text-4xl font-semibold text-nowrap">
                  Hub <br className="hidden lg:block" /> Comunication
                </h1>
              </div>
              <p className="text-[#898994] font-main text-sm lg:text-base">
                Com nosso serviço de SMSF, conectamos usuários que nao sabem
                como criar sua conta, e conectamos você a um Fundo ideal.
              </p>
            </div>
            
            <button
              onClick={() => (window.location.href = '/page2')}
              className="hidden lg:flex px-[38px] py-4 justify-center items-center gap-[10px] rounded-full bg-[#6438F4] hover:bg-[#2D09A5] duration-300 z-50 w-full mt-auto"
            >
              <p className="text-white text-center font-main text-base font-medium leading-6 ">
                Start Now
              </p>
            </button>
            <Link
              to={''}
              className="flex lg:hidden rounded-lg size-10 flex-col items-center my-auto justify-center bg-[#6438F4]"
            >
              <GoArrowUpRight className="text-white text-2xl" />
            </Link>
          </div>
          
        </div> */}
        <div className="flex flex-col p-8 pb-12 pt-6 w-full bg-[#0A0A11] gap-6 h-full">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="hidden lg:flex md:py-3 md:pr-8 p-3 md:pl-[27px] items-center justify-center md:gap-2 border-solid border-[1px] md:rounded-[50px] rounded-full ml-auto bg-transparent md:w-[150px]"
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
              Fechar
            </p>
          </button>
          <div className="flex flex-col lg:flex-row justify-between text-[#A4A4AD] h-full gap-10">
            <div className="flex flex-row w-full lg:w-fit lg:flex-col mr-10 justify-between">
            </div>
            <div className="flex flex-col gap-4 w-full h-full pb-32 lg:pb-0">
              <Card
                title="What We Offer"
                link="CryptoSync Team"
              />
              <Card
                title="Our Channels"
                link="CryptoSync Team"
              />
              <Card
                title="Reports"
                link="CryptoSync Team"
              />
              <Card
                title="Be Premium"
                link="CryptoSync Team"
              />
              <Card
                title="FAQ"
                link="CryptoSync Team"
              />
            </div>
          </div>
        </div>
        <div
          className={`fixed lg:hidden top-24 bg-black h-svh duration-500 ease-in -z-10 w-full ${
            openMenu ? '!right-0' : '-right-full'
          }`}
        ></div>
      </div>
    </>
  )
}

type TCard = {
  title: string

  link: string

}
const Card = ({ title, link  }: TCard) => {
  return (
    <div className="group hover:shadow-custom3 duration-300 flex flex-row items-center justify-between bg-[#0C0C0D] p-6 rounded-xl border border-[#1A1A1E]">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-white font-main text-lg font-semibold">{title}</p>
      </div>
      <Link
        to={link}
        className="rounded-lg size-10 flex flex-col items-center  static bottom-0 justify-center bg-[#161618] group-hover:bg-[#6539F4] duration-300"
      >
        <GoArrowUpRight className="text-white text-2xl" />
      </Link>
    </div>
  )
}
