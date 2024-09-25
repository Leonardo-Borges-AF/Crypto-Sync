/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
// import image1 from '/images/people-1.jpeg'
// import image2 from '/images/people-2.jpeg'
// import image3 from '/images/people-3.jpeg'
// import image4 from '/images/people-4.jpeg'
import image2 from '/images/image2.png'
import image3 from '/images/image3.png'


import { FaArrowRight } from 'react-icons/fa'
import './Session3.css'

export const Session3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = window.innerWidth < 1024

  const cards = [
    { image: image2, index: 1 },
    { image: image3, index: 2 },
  ]

  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const session1Ref = useRef(null)
  const session2Ref = useRef(null)

  useEffect(() => {
    if (currentIndex === null) {
      setCurrentIndex(cards.length - 1)
    }
  }, [currentIndex, cards.length])

  useEffect(() => {
    const handleScroll = () => {
      const session1top =
        (session1Ref.current as any).getBoundingClientRect().top +
        (window.scrollY - 450)
      const session2top =
        (session2Ref.current as any).getBoundingClientRect().top +
        (window.scrollY - 450)


      if (window.scrollY > session1top) {
        setCurrentIndex(0)
      }
      if (window.scrollY > session2top) {
        setCurrentIndex(1)
      }


      const container = containerRef.current as any
      const image = imageRef.current as any

      if (container && image) {
        const containerRect = container.getBoundingClientRect()
        const imageHeight = image.offsetHeight + 700

        if (
          containerRect.top < 100 &&
          Math.abs(containerRect.top - 100) < containerRect.height - imageHeight
        ) {
          image.style.position = 'fixed'
          image.style.top = '150px'
        } else if (containerRect.top >= 0) {
          image.style.position = 'relative'
          image.style.top = '0'
        } else {
          image.style.position = 'absolute'
          image.style.top = `${containerRect.height - imageHeight}px`
        }
      }
    }
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextIndex = (currentIndex + 1) % cards.length

  

  return (
    <div
      id="session3"
      className="bg-background-primary px-5 md:px-20 py-6 md:py-16 md:p-20"
    >
      <div
        ref={containerRef}
        className="relative max-w-[1184px] mx-auto flex flex-col gap-8 py-12 mb-[550px] md:mb-0"
      >
        <div className="flex flex-col md:flex-row gap-28 relative">
          <div className="gap-16 md:gap-64 flex flex-col max-w-[600px]">
          
            <Session
              refSession={session1Ref}
              abovetitle="Research and Market Insights"
              title="Reports"
              description={
                <>
                  <div id="reports-section" className='flex flex-col gap-[30px]'>
                    <p className="text-colorText text-base">
                      Take advantage of our free monthly report. 
                      As a member, you'll receive a weekly report 
                      and research on the top crypto assets, keeping 
                      you fully synced with the crypto market.
                    </p>

                    <form id="subscribeForm" className='flex gap-6' >
                        <input
                          className='rounded-lg py-4 pl-6 w-[300px]' 
                          type="email" 
                          id="emailInput" 
                          placeholder="Email" 
                          required
                          />
                        <button 
                          type="submit"
                          className='bg-[#6438F4] py-4 px-9 text-white font-extrabold font-main rounded-3xl transition-all duration-500 ease-in-out hover:rounded-lg'
                        >
                          SIGN UP
                        </button>
                    </form>
                    
                  </div>
                  

                </>
              }
            />
            <Session
              refSession={session2Ref}
              abovetitle="All-In-One Investor HUB"
              title="Sync Hub - Platform"

              description={
                <>
                <div className='flex flex-col gap-7'>
                  <p className="text-colorText text-base">
                    Our platform brings everything you need into one place—news, 
                    research, signals, thematic portfolios, and reports—offering 
                    an intelligent way to access all the data and opportunities 
                    in the crypto market. Plus, our Telegram channel puts these 
                    insights right at your fingertips.
                  </p>

                  <a href="#news">
                    <button className='flex gap-[10px] px-[38px] py-4 border border-solid border-white border-opacity-20 w-fit rounded-full bg-transparent items-center'>
                      <p className='text-white font-main font-medium '>
                        Register now
                      </p>
                      <FaArrowRight className="text-white max-w-5 max-h-4" />
                    </button>
                  </a>
                  
                </div>
                  
                </>
              }
              // bottomComponent={
              //   <div className="flex flex-row items-center gap-4 mt-8">
              //     <div className="flex flex-row">
              //       <img
              //         src={image1}
              //         alt="image1"
              //         className="w-[48px] h-[48px] rounded-full object-cover"
              //       />
              //       <img
              //         src={image2}
              //         alt="image2"
              //         className="w-[48px] h-[48px] rounded-full object-cover  -ml-4"
              //       />
              //       <img
              //         src={image3}
              //         alt="image3"
              //         className="w-[48px] h-[48px] rounded-full object-cover  -ml-4"
              //       />
              //       <img
              //         src={image4}
              //         alt="image4"
              //         className="w-[48px] h-[48px] rounded-full object-cover  -ml-4"
              //       />
              //     </div>

              //     <span className="text-white text-base">
              //       Join 1.014 others
              //     </span>
              //   </div>
              // }
            />
          </div>
          <div className="relative w-full">
            <ul ref={imageRef} className="cards relative ml-[20%] md:ml-0">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  index={card.index + 1}
                  zIndex={cards.length - index}
                  current={index === currentIndex}
                  next={index === nextIndex}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type TCard = {
  image: string
  index: number
  zIndex: number
  current: boolean
  next: boolean
}

const Card = ({ image, index, current, next }: TCard) => {
  let className = 'card'
  if (current) {
    className += ' card--current'
  } else if (next) {
    className += ' card--next'
  }

  return (
    <div
      className={`flex flex-col w-[346px] border border-outlined rounded-xl backdrop-blur-md absolute ${className}`}
    >
      <img
        src={image}
        alt={`Card ${index}`}
        className="w-full h-[322px] object-cover rounded-t-xl"
      />
      <div className="h-fit w-full text-white px-10 py-8">
        <div className="bg-background-secondary rounded-full w-10 h-10 flex mb-8 mx-auto">
          <span className="m-auto">{index}</span>
        </div>
      </div>
    </div>
  )
}

type TSession = {
  refSession: React.RefObject<HTMLDivElement>
  abovetitle: string
  title: string
  description: React.ReactNode
  bottomComponent?: React.ReactNode
  buttomTitle?: string
  button?: string
  button_link?: string
}

const Session = ({
  refSession,
  abovetitle,
  title,
  description,
  bottomComponent,
  buttomTitle,
  button,
  button_link,
}: TSession) => {
  return (
    <div
      ref={refSession}
      data-aos="fade-right"
      className="rounded-md md:p-6 gap-4 flex flex-col"
      style={{
        borderColor: '#222222',
      }}
    >
      <label className="text-white font-Jakarta font-light text-sm uppercase tracking-[0.7]">
        {abovetitle}
      </label>
      <h3 className="md:text-[38px] text-[28px] font-extrabold text-white pr-2 text-gradient">
        {title}
      </h3>
      {description}
      {bottomComponent}
      {button && (
        <a
          className="flex px-[38px] py-4 justify-center items-center border-solid border gap-[10px] rounded-full bg-transparent md:w-fit w-full hover:cursor-pointer mt-8 hover:bg-[#FFFFFF26] duration-300"
          style={{ borderColor: 'rgba(255, 255, 255, 0.20)' }}
          href={button_link}
          target="_blank"
        >
          <p className="text-white text-center font-main text-base font-medium leading-6">
            {buttomTitle}
          </p>
          <div>
            <FaArrowRight className="text-white max-w-5 max-h-4" />
          </div>
        </a>
      )}
    </div>
  )
}
