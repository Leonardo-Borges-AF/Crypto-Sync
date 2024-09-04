/* eslint-disable @typescript-eslint/no-explicit-any */
import './Session1.css'
import { FaArrowRight } from 'react-icons/fa'
import Video from '/videos/bitcoin-video.mp4'
import GridImage from '/images/grid-light.png'
import { useEffect, useRef } from 'react'
import { GoArrowDown } from 'react-icons/go'
import Reports from '/images/icons/Subtract.png'
import Signals from '/images/icons/candle.png'
import Consulting from '/images/icons/Consulting.png'
import Portfolios from '/images/icons/Portfolios.png'
import Ideas from '/images/icons/Ideas.png'
import Educational from '/images/icons/Educational.png'


import { FaArrowUp } from "react-icons/fa6";

export const Session1 = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current as any
      const video = videoRef.current as any

      if (container && video) {
        const containerRect = container.getBoundingClientRect()
        const videoHeight = video.offsetHeight
        if (
          Math.abs(containerRect.top - 330) <
          containerRect.height - videoHeight
        ) {
          video.style.position = 'fixed'
          video.style.top = '180px'
        } else if (containerRect.top >= 0) {
          video.style.position = 'relative'
          video.style.top = '0'
        } else {
          video.style.position = 'absolute'
          video.style.top = `${containerRect.height - videoHeight - 150}px`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div>
          <div className="bg-animation absolute  -z-20 w-full">
            <div id="stars"></div>
            <div id="stars2"></div>
          </div>
        <div
          className="fixed bottom-0 left-0 right-0 h-[700px] -z-40"
          style={{
            background:
              'radial-gradient(121.2% 54.67% at 50% 100%, #4719A2 0%, rgba(0, 3, 3, 0) 100%)',
          }}
        ></div>
        <img
          src={GridImage}
          className="absolute top-0 left-0 right-0 w-svw -z-30 h-[1600px] md:h-[1500px] lg:h-[1000px] object-cover"
        />
          
        <div
          ref={containerRef}
          className="px-5 md:px-20 relative max-w-[1280px] mx-auto"
        >
          
          {!isMobile && (
            <video
              ref={videoRef}
              className="fixed top-[180px] object-cover -z-10 mix-blend-lighten w-[750px] left-1/2 transform -translate-x-1/2"
              autoPlay
              loop
              muted
              playsInline
              src={Video}
            ></video>
          )}
          <h1 className="font-Jakarta text-[40px] md:text-[80px] font-extrabold uppercase text-gradient">
            BOOST YOUR INVESTMENTS          
          </h1>
          <div className="flex gap-[5px]">
            <div className="h-[2px] w-10 md:w-48 bg-white mt-7 md:mt-[60px]" />
            <h2 className="text-white font-Jakarta text-4xl md:leading-relaxed md:text-[52px] font-extralight uppercase">
              Your Crypto, Our EXPERTISE
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-10">
              <p className="md:text-lg font-main font-normal leading-normal self-stretch max-w-[358px] mt-10 text-white">
                At <span className='font-extrabold'>CryptoSync</span>, we provide 
                everything you need to stay in <span className='text-[#6338F4]'>SYNC </span> 
                with the crypto world. From <span className='font-extrabold'>trading </span>  
                <span className='font-extrabold'>signals </span> to in-depth <span className='font-extrabold'>reports</span>, 
                <span className='font-extrabold'> research</span>, <span className='font-extrabold'>thematic portfolios</span>, and 
                <span className='font-extrabold'> educational content</span>, we've got you 
                covered.
              </p>

              <div className="flex flex-col md:flex-row gap-6 mb-24">
                <button
                  onClick={() => (window.location.href = '/page2')}
                  className="flex px-[38px] py-4 justify-center items-center gap-[10px] rounded-full bg-[#6438F4] hover:bg-[#2D09A5] duration-300 "
                >
                  <p className="text-white text-center font-main text-base font-medium leading-6 ">
                    Start Now
                  </p>
                  <FaArrowRight className="text-white" />
                </button>
                <button
                  className="flex px-[38px] py-4 justify-center items-center border-solid border rounded-full md:bg-[#00000005] bg-[#00000002] backdrop-blur-[18.75px] hover:backdrop-blur-[19px] hover:bg-[#FFFFFF26] duration-300"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.20)' }}
                >
                  <p className="text-white text-center font-main text-base font-medium leading-6">
                    Learn more
                  </p>
                </button>

                <video
                  className="flex md:hidden relative object-cover -z-10 mix-blend-lighten h-[400px] left-1/2 transform -translate-x-1/2"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={Video}
                ></video>
              </div>
            </div>
            <div className="flex flex-col md:gap-6 gap-8 md:mt-10 md:mb-0 mb-28">
              <div className="flex md:gap-6 gap-[90px]">
                <div className="flex flex-col gap-2 w-[150px] items-center">
                  <p className="font-Jakarta text-[38px] tracking-[-1.2px] leading-snug font-bold titleEffect">
                    +1.8K %
                  </p>
                  <p className="font-Jakarta md:text-base text-lg font-normal leading-normal text-[#A4A4AD]">
                    Profit in Signals
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-[150px] items-center">
                  <p className="font-Jakarta text-[38px] tracking-[-1.2px] leading-snug font-bold titleEffect">
                    +5.7k
                  </p>
                  <p className="font-Jakarta md:text-base text-lg font-normal leading-normal text-[#A4A4AD]">
                    Users in Community
                  </p>
                </div>
              </div>
              <div className="flex md:gap-6 gap-[90px] justify-center">
                <div className="flex flex-col md:gap-2 w-[150px] items-center">
                  <p className="font-Jakarta text-[38px] tracking-[-1.2px]  leading-snug font-bold titleEffect">
                    +12
                  </p>
                  <p className="font-Jakarta md:text-base text-lg font-normal  leading-normal text-[#A4A4AD] text-center">
                    Institucional <br /> Members
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full items-center flex flex-col gap-[29px]'>
            <p className='text-white font-Jakarta font-extrabold text-[38px]'> What we offer</p>
            <GoArrowDown  className='text-white text-4xl'/>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className='flex flex-col md:gap-[105px] md:pb-20'>
            <div className='flex md:flex-row flex-col md:justify-between  '>
              <div data-aos="fade-right" className='bg-[#0C0C0D] md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px] '>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Reports} className='w-9 h-[43px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Reports & Research
                  </p>
                  <p className='text-center text-[#A4A4AD] text-base  font-Jakarta'>
                    Newsletters, insights and research. We cut through the noise and serve you only what truly matters, all in a way that's easy to digest.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" className='bg-[#0C0C0D]  md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Signals} className='w-10 h-[48px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Signals
                  </p>
                  <p className='text-center text-[#A4A4AD] text-lg leading-7 font-Jakarta'>
                    Not sure what to buy in the short and medium term? Get the best signals on how to position yourself in the crypto market.                  
                  </p>
                </div>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:justify-between  '>
              <div data-aos="fade-right" className='bg-[#0C0C0D] md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Consulting} className='w-[53px] h-[44px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Consulting
                  </p>
                  <p className='text-center text-[#A4A4AD] text-[17px] leading-7 font-Jakarta'>
                    Exclusive for high-net-worth investors and institutions looking to invest in the cryptocurrency market, needing professional guidance for exposure strategies.                  
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" className='bg-[#0C0C0D] md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Portfolios} className='w-11 h-[38px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Thematic Portfolios 
                  </p>
                  <p className='text-center text-[#A4A4AD] text-base  font-Jakarta w-[228px]'>
                    A selection of assets we consider to be the best opportunities in the crypto universe, segmented by the most promising themes.                  
                  </p>
                </div>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:justify-between  '>
              <div data-aos="fade-right" className='bg-[#0C0C0D] md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Ideas} className='w-[27px] h-11' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Alternative ideas
                  </p>
                  <p className='text-center text-[#A4A4AD] text-[19px] leading-7 w-[252px] font-Jakarta'>
                    Ideas on projects in their very early stages or with very low market capitalization, along with airdrop opportunities.                  
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" className='bg-[#0C0C0D] md:p-6 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Educational} className='w-10 h-[46px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta'>
                    Educational Content
                  </p>
                  <p className='text-center text-[#A4A4AD] text-[19px] leading-7 font-Jakarta'>
                    Learn the ins and outs of crypto with step-by-step guides and practical tutorials.                   
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-center'>
              <button className='rounded-full py-4 px-[38px] bg-[#6438F4] flex gap-[10px] items-center'>
                <p className='text-white font-main font-medium text-xl leading-6 '>
                  Sign Up for Premium Hub
                </p>
                <FaArrowUp className='text-white  text-2xl rotate-45'/>
              </button>
            </div>
          </div>
          

          
        </div>
      </div>
    </>
  )
}
