import { FaPlus, FaMinus  } from 'react-icons/fa6'
import './Session1.css'
import Image from '/images/spreadsheets-background.png'
import { useState } from 'react'

export const Questions = () => {
  return (
    <div id="questions" className="relative">
      <div className="bg-background-primary absolute w-svw h-full -z-20"></div>
      <div className="md:pt-[300px] md:px-20 lg:px-[185px] md:pb-[100px] px-5 py-16 flex flex-col items-center gap-16 relative max-w-[1280px] mx-auto ">
        <img
          src={Image}
          className="absolute top-0  h-2/3  lg:h-[388px] md:w-[1062px] -z-10"
          style={{
            mixBlendMode: 'hard-light',
          }}
        />
        <div className="bg-animation absolute w-full -z-10 -left-[20%]">
          <div id="stars"></div>
        </div>
        <div className="flex flex-col gap-6 md:px-[184px] justify-center items-center">
          <h3 className="font-Jakarta md:text-5xl text-[28px] text-center md:font-extrabold font-bold text-gradient">
            Frequently Asked Questions
          </h3>
          <p className="text-[#898994] text-center font-main text-base ">
            We will help answer your questions so you can start copy trading
            today. CopyTrader is not investment advice.
          </p>
        </div>
        <div className="flex flex-col w-full gap-6">
          <Card 
            title="What is CryptoSync?" 
            text='CryptoSync is Australia’s first financial platform specialising in cryptocurrencies. We are proudly Australian, with a greater purpose: to help you and your money thrive in this new era. No conflicts of interest, no jargon. Just clear, actionable insights that anyone can understand and put into practice.'
          />
          <Card 
            title="Why should I trust CryptoSync's experts?"
            text='Our team consists of analysts and investors with over 8 years of experience in the crypto sector and decades of combined experience in the financial markets. The biggest opportunities in recent years have been on our radar.'
          />
          <Card 
            title="How much does it cost to get started?"
            text="You can try our platform for free. To access all features, we offer a subscription plan for A$60.00/month. If you're not completely satisfied, you can cancel within 7 days and get a full refund."
          />
          <Card 
            title="Can I cancel my subscription at any time?"
            text='Yes. We don’t lock in our customers. If you subscribe and are not satisfied, you can cancel within 7 days for a full refund.'
          />
          <Card
            title="How much time do I need to invest to benefit from CryptoSync?"
            text='We recommend spending at least 15 minutes per week reading our content at your own pace. You can access it anywhere: at home, on the bus, at work, or on your mobile. Our weekly report summarises the most important ideas for your portfolio and can be read in 5 minutes. On our platform, you can spend as much time as you like. Time is our most precious resource: the more you invest, the better you’ll perform.'
          />
          <Card 
            title="I have a specific question, who can I contact?"
            text='There’s no such thing as a ‘silly question’. What’s silly is not asking. If you have any questions, feel free to email us at (support@cryptosync.ai). We’ll be happy to help!'
          />
        </div>
      </div>
    </div>
  )
}

type TProps = {
  title: string
  text: string
}
const Card = ({ title, text }: TProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Expand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      data-aos="fade-right"
      className="flex md:justify-between md:gap-0 gap-[10px] rounded-lg bg-[#080809] border border-solid p-5 md:items-center"
      style={{ borderColor: 'var(--grey-corlos-gray-500, #2A2B37)' }}
    >
      <div className='flex flex-col w-full'>
        <div className='flex md:justify-between md:gap-0 gap-[10px] rounded-lg bg-[#080809] md:items-center w-full'>
          <p className="text-white font-Jakarta text-lg font-semibold w-full">
            {title}
          </p>
          <button onClick={Expand} className="focus:outline-none bg-transparent">
            {isExpanded ? (
              <FaMinus className="md:size-6 size-[18px] text-white transition duration-500 ease-in-out transform hover:-rotate-180" />
            ) : (
              <FaPlus className="md:size-6 size-[18px] text-white transition duration-500 ease-in-out transform hover:-rotate-180" />
            )}
          </button>
        </div>

        <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
          {isExpanded && (
            <div className="mt-4 text-white font-light font-Jakarta">
              <p>{text}</p>
            </div>
          )}
        </div>
        
      </div>
      
    </div>
  )
}
