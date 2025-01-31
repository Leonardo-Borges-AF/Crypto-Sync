/* eslint-disable @typescript-eslint/no-explicit-any */
import './Session1.css'
import Video from '/videos/bitcoin-video.mp4'
import GridImage from '/images/grid-light.png'
import { useEffect, useRef, useState } from 'react'
import Reports from '/images/icons/Subtract.png'
import Signals from '/images/icons/candle.png'
import Consulting from '/images/icons/Consulting.png'
import Portfolios from '/images/icons/Portfolios.png'
import Ideas from '/images/icons/Ideas.png'
import Educational from '/images/icons/Educational.png'
import binance from '/images/binanceLogo.png'
import nortech from '/images/nortechLogo.png'
import circle from '/images/circleLogo.png'
import wunder from '/images/wunderLogo.png'
import alphractal from '/images/alphractalLogo.png'
import google from '/images/googleLogo.png'
import microsoft from '/images/microsoftLogo.png'


export const Session1 = () => {
  const texts = ['Reports ', 'Signals ', 'Consulting ', 'Insights ', 'Analisys ']; // As palavras a serem escritas
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
 

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayedText(currentText.slice(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayedText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
        if (currentCharIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de apagar
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 200; // Velocidade de digitação/apagar
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [currentCharIndex, isDeleting, texts, currentTextIndex]);

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
          video.style.top = '80px'
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
              className="absolute object-cover -z-10 mix-blend-lighten w-[750px] left-1/2 transform -translate-x-1/2"
              autoPlay
              loop
              muted
              playsInline
              src={Video}
            ></video>
          )}
            <video
              className="flex md:hidden relative object-cover -z-10 mix-blend-lighten h-[400px] left-1/2 transform -translate-x-1/2"
              autoPlay
              loop
              muted
              playsInline
              src={Video}
            ></video>
          <div className='flex flex-col w-full items-center gap-9 md:pt-[400px] md:mb-8 mb-14'>
            <div className='flex flex-col items-center gap-4'>
              <h2 className='text-white font-main md:font-bold font-semibold md:text-[50px] leading-tight text-4xl text-center '>
                The all-in-one Crypto Hub <br />
                for: <span className='text-[#6438F4]'>{displayedText}</span>
              </h2>
              <p className='text-white font-main md:text-xl text-lg md:text-start text-center'>
                Your Crypto in SYNC with our knowledge and expertise, equals Success.
              </p>
            </div>
            
            <a href="https://app.cryptosync.com.au/checkout/cryptosync-premium">
              <button className='relative bg-[#6438F4] py-3 px-16 text-white font-main font-extrabold items-center rounded-3xl transition-all duration-500 ease-in-out hover:rounded-lg'>
                START NOW
              </button>
            </a>
            
           
          </div>
          
          <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-4 mb-16'>
            {/* Sombra esquerda */}
            <div className='absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none'></div>
            
            {/* Sombra direita */}
            <div className='absolute top-0 right-0 h-full w-1/6 bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none'></div>

            {/* Container do carrossel */}
            <div id="cards-section" className='flex overflow-hidden w-full items-center'>
              <div className='flex gap-12 items-center justify-between space-x-4 animate-scroll w-full'>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                <img src={binance} className='w-[165px] h-[35px]'/>
                <img src={alphractal} className='w-[174px] h-[37px]'/>
                <img src={nortech} className='w-[164px] h-[53px]'/>
                <img src={circle} className='w-[106px] h-[33px]'/>
                <img src={wunder} className='w-[213px] h-[36px]'/>
                <img src={google} className='w-[87px] h-[72px]'/>
                <img src={microsoft} className='w-[151px] h-[68px]'/>
                
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div  className='flex flex-col md:gap-[105px] md:pb-20 items-center justify-center md:justify-start w-full gap-9'>
            <div  className='flex md:flex-row flex-col md:justify-between w-full md:gap-0 gap-9 items-center'>
              <div data-aos="fade-right" className='bg-[#0C0C0D] md:p-6 p-4  border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px] transition-all duration-700 ease-in-out hover:shadow-custom4 hover:bg-[#212123]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Reports} className='w-9 h-[43px]' />
                </div>
                <div className='flex flex-col gap-6 items-center'>
                  <p className='text-[#E7E7EF] font-extrabold text-[28px] text-center leading-9 font-Jakarta '>
                    Reports & Research
                  </p>
                  <p className='text-center text-[#A4A4AD] text-base  font-Jakarta'>
                    Newsletters, insights and research. We cut through the noise and serve you only what truly matters, all in a way that's easy to digest.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" className='bg-[#0C0C0D] hover:bg-[#212123] hover:shadow-custom4 transition duration-300 md:p-6 p-4 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
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
            <div className='flex md:flex-row flex-col md:justify-between  w-full md:gap-0 gap-9 items-center'>
              <div data-aos="fade-right" className='bg-[#0C0C0D] hover:bg-[#212123] hover:shadow-custom4 transition duration-300 md:p-6 p-4 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
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
              <div data-aos="fade-left" className='bg-[#0C0C0D] hover:bg-[#212123] hover:shadow-custom4 transition duration-300 md:p-6 p-4 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
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
            <div className='flex md:flex-row flex-col md:justify-between w-full md:gap-0 gap-9 items-center'>
              <div data-aos="fade-right" className='bg-[#0C0C0D] hover:bg-[#212123] hover:shadow-custom4 transition duration-300 md:p-6 p-4 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
                <div className='rounded-full size-[74px] bg-[#1D1D20] flex items-center justify-center'>
                  <img src={Ideas} className='w-[27px] ' />
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
              <div data-aos="fade-left" className='bg-[#0C0C0D] hover:bg-[#212123] hover:shadow-custom4 transition duration-300 md:p-6 p-4 border border-solid border-[#1A1A1E] rounded-2xl items-center flex flex-col gap-4 w-[310px]'>
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
          </div>
          

          
        </div>
      </div>
    </>
  )
}
                