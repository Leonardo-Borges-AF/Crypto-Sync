import { BackgroundDashed } from '~/components/BackgroundDashed.component'
import { FaCheck } from "react-icons/fa";

export const Session4 = () => {
  return (
    <div className="bg-[#080809]">
      <div className="py-[50px] px-5 md:px-8  relative max-w-[1280px] mx-auto">
        <BackgroundDashed />
        <div className="flex flex-col md:gap-20 gap-12 z-20 relative w-full items-center justify-center">
          <div className='flex flex-col gap-14 w-full items-center'>
             <p
              id="pricing"
              data-aos="fade-up"
              className="font-semibold font-main text-3xl  w-full  text-white text-center"
            >
              Choose Your Subscription Plan
            </p>
            {/*
            <div className='flex gap-6'>
              <div className='flex flex-col items-center gap-6'>
                <div className='bg-transparent rounded-full px-14 py-[60px] border-[6px] border-solid border-gradient-to-r from-red-500 to-blue-500 items-center'>
                  <p className='text-white font-main font-light text-6xl '>
                    30
                  </p>
                </div>
                <p className='text-white font-light text-xl '>
                  DAYS
                </p>
              </div>
              <div className='flex flex-col items-center gap-6'>
                <div className='bg-transparent rounded-full px-14 py-[60px] border-[6px] border-solid border-gradient-to-r from-red-500 to-blue-500 items-center'>
                  <p className='text-white font-main font-light text-6xl '>
                    15
                  </p>
                </div>
                <p className='text-white font-light text-xl '>
                  HOURS
                </p>
              </div>
              <div className='flex flex-col items-center gap-6'>
                <div className='bg-transparent rounded-full px-14 py-[60px] border-[6px] border-solid border-gradient-to-r from-red-500 to-blue-500 items-center'>
                  <p className='text-white font-main font-light text-6xl '>
                    49
                  </p>
                </div>
                <p className='text-white font-light text-xl '>
                  MINUTES
                </p>
              </div>
              <div className='flex flex-col items-center gap-6'>
                <div className='bg-transparent rounded-full px-14 py-[60px] border-[6px] border-solid border-gradient-to-r from-red-500 to-blue-500 items-center'>
                  <p className='text-white font-main font-light text-6xl '>
                    28
                  </p>
                </div>
                <p className='text-white font-light text-xl '>
                  SECONDS
                </p>
              </div>
            </div> */}
            {/* cards */}
            <div className='flex md:flex-row flex-col gap-8 w-full'>
              {/* card 1 */}
              <div className='bg-transparent flex flex-col p-8 rounded-lg  border border-solid border-white gap-8 w-full h-[690px] justify-between'>
                
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col items-center gap-6 '>
                    <p className='text-white font-semibold font-main'>
                      Sync Basic
                    </p>
                    <p className='font-main text-white font-bold text-4xl '>
                      FREE
                    </p>
                  </div>
                  <div className='w-full border border-white border-opacity-20'/>
                  <div className='flex flex-col w-full gap-6'>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Weekly Analyses
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Monthly Report
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Basic Courses
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Free Newsletters 
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Sporadic signals
                      </p>
                    </div>
                    
                  </div>
                </div>
                <button className='border-2 border-solid border-[#6338F4] py-4 px-[38px] bg-transparent rounded-full w-fit mx-auto hover:rounded-lg'>
                  <p className='text-[#6338F4] font-main font-extrabold'>
                    Join Now
                  </p>
                </button>
              </div>
              {/* card2 */}
              <div className='bg-transparent flex flex-col p-8 rounded-lg  border-2 border-solid border-[#663AF4] gap-8 w-full h-[690px] justify-between'>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col items-center gap-6 '>
                    <p className='text-white font-semibold font-main'>
                      Sync Premium
                    </p>
                    <p className='font-main text-white'>
                      A$ <span className='text-[34px]'>60,00</span>/ month
                    </p>
                  </div>
                  <div className='w-full border border-white border-opacity-20'/>
                  <div className='flex flex-col w-full gap-6'>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        All <span className='text-[#815DFA]'> Sync Basic </span> Features
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Access Sync Hub
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Daily Analyses
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Weekly Report
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Exclusive Signals
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Newsletters & Research
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Access to Thematic Portfolios
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Advanced Courses
                      </p>
                    </div>
                  </div>
                </div>
                

                <button className='border-2 border-solid border-[#6338F4] py-4 px-[38px] bg-transparent rounded-full w-fit mx-auto hover:rounded-lg'>
                  <p className='text-[#6338F4] font-main font-extrabold'>
                    Start Now
                  </p>
                </button>
              </div>
              {/* card3 */}
              <div className='bg-transparent flex flex-col p-8 rounded-lg  border border-solid border-white gap-8 w-full h-[690px] justify-between'>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col items-center gap-6 '>
                    <p className='text-white font-semibold font-main'>
                      Sync Wealth
                    </p>
                    <p className='font-main text-white font-bold text-4xl '>
                      Contact Us
                    </p>
                  </div>
                  <div className='w-full border border-white border-opacity-20'/>
                  <div className='flex flex-col w-full gap-6'>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        All <span className='text-[#815DFA]'> Sync Premium </span> Features
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        1:1 Consulting
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Live Sessions
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        24/7 Support
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Daily Position Tracking
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Exclusive Strategies
                      </p>
                    </div>
                    <div className='flex gap-2 items-center '>
                      <div className='size-5 items-center justify-center flex'>
                        <FaCheck className='text-white text-sm'/>
                      </div>
                      <p className='text-white font-bold text-sm'>
                        Educational Content
                      </p>
                    </div>
                  </div>
                </div>

                <button className='border-2 border-solid border-[#6338F4] py-4 px-[38px] bg-transparent rounded-full w-fit mx-auto hover:rounded-lg'>
                  <p className='text-[#6338F4] font-main font-extrabold'>
                    Contact Us
                  </p>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
