import plane from '/images/icons/PaperPlane.png'
import { GoArrowUpRight } from 'react-icons/go'
import { FaArrowRight } from 'react-icons/fa'
import bitcoin from '/images/bitcoin.png'
import cryptoindex from '/images/cryptoindex.png'
import cryptosync from '/images/cryptosync.png'
import inovation from '/images/inovation.png'
import { BackgroundDashed } from '~/components/BackgroundDashed.component'

export const Session2 = () => {
  return (
    <div style={{ backgroundColor: 'rgb(8,8,9)' }}>
      <div className="md:py-[100px] py-16 relative max-w-[1280px] mx-auto px-5 md:px-20">
        <BackgroundDashed />
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col md:flex-row justify-between w-full z-20">
            <div data-aos="fade-right" className="flex flex-col gap-4">
              <p className="text-white text-sm font-main font-light leading-5 -tracking-[0.7px]">
                FUNDS
              </p>
              <p className="titleEffect md:(font-main font-bold -tracking-widest) text-[28px] md:text-5xl">
                Explore Our <br className="hidden md:block" /> Investment Funds
              </p>
            </div>
            <p
              data-aos="fade-left"
              className="md:text-right font-main text-lg leading-7 flex items-end mt-4 md:mt-0"
              style={{ color: 'rgba(137, 137, 148, 0.80)' }}
            >
              Immediate Access to Exclusive <br /> Resources and Support.
            </p>
          </div>
        </div>

        {/* VERSAO MOBILE */}
        <div className="flex lg:hidden flex-col gap-8 mt-16 z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            <div
              className="group p-6 flex flex-col justify-between items-start border rounded-2xl border-solid relative gap-48 hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-4">
                  <p
                    className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                    style={{
                      color: 'var(--base-color-base-white-color, #E7E7EF)',
                    }}
                  >
                    FUND
                  </p>
                  <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                    CryptoSync Team
                  </p>
                </div>
                <div className="flex justify-between">
                  <p
                    className="text-base font-main"
                    style={{ color: '#898994' }}
                  >
                    Merge expert trading with AI for steady capital growth and
                    risk management.
                  </p>
                </div>
              </div>
              <div className="rounded-lg size-10 flex flex-col items-center  static bottom-0 justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>

              <img
                src={cryptosync}
                alt=""
                className="w-auto h-[206px] absolute bottom-0 right-0 filter invert-1 group-hover:invert"
              />
            </div>
            <div
              className="p-6 flex flex-col justify-between items-start border rounded-2xl border-solid relative gap-48 group hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <p
                    className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                    style={{
                      color: 'var(--base-color-base-white-color, #E7E7EF)',
                    }}
                  >
                    FUND
                  </p>
                  <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                    Bitcoin Maximalism
                  </p>
                </div>
                <p className="text-base font-main" style={{ color: '#898994' }}>
                  Grow your Bitcoin holdings for the long term, strategically
                  increasing your assets.
                </p>
              </div>

              <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>
              <img
                src={bitcoin}
                alt=""
                className="w-auto h-[200px] absolute bottom-0 right-0 filter invert-1 group-hover:invert"
              />
            </div>
            <div
              className="p-6 flex flex-col justify-between items-start border rounded-2xl border-solid relative gap-48 group hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <p
                    className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                    style={{
                      color: 'var(--base-color-base-white-color, #E7E7EF)',
                    }}
                  >
                    FUND
                  </p>
                  <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                    The Next Gem
                  </p>
                </div>
                <p className="text-base font-main" style={{ color: '#898994' }}>
                  Invest boldly in small-cap cryptocurrencies with high growth
                  potential.
                </p>
              </div>

              <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>
              <img
                src={cryptoindex}
                alt=""
                className="w-auto h-[160px] absolute bottom-0 right-0 filter invert-1 group-hover:invert "
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 ">
            <div
              className="p-6 flex flex-col justify-between items-start  group border rounded-2xl border-solid w-full relative gap-48 hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between ">
                    <p
                      className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                      style={{
                        color: 'var(--base-color-base-white-color, #E7E7EF)',
                      }}
                    >
                      FUND
                    </p>
                    <div className="flex items-center justify-center px-3 py-1 rounded-[38px] bg-[#2B8A3E33]">
                      <span className="text-[#2B8A3E] font-main text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                    Venture Fund
                  </p>
                </div>
                <p className="text-base font-main" style={{ color: '#898994' }}>
                  Gain strategic insights and market trends with our most recent
                  report.
                </p>
              </div>

              <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>
              <img
                src={inovation}
                alt=""
                className="w-auto h-[206px] absolute bottom-0 filter invert-1 group-hover:invert right-0"
              />
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row rounded-2xl p-6 md:py-8 md:px-14 gap-6 items-center z-20"
            style={{ backgroundColor: '#0C0C0D' }}
          >
            <div className="flex flex-col md:flex-row md:gap-12 gap-8 items-center">
              <img src={plane} alt="" className="size-24" />
              <div className="flex flex-col gap-4 text-center md:text-start w-full">
                <p className="text-white font-Jakarta font-extrabold text-[28px]">
                  SMSF Solution
                </p>
                <p
                  className="font-Jakarta text-base w-full"
                  style={{ color: 'rgba(137, 137, 148, 0.80)' }}
                >
                  We provide expert support for setting up and integrating your
                  Self-Managed Super Fund (SMSF) with our service.
                </p>
              </div>
            </div>
            <button
              className="flex gap-[10px] py-3 pr-8 pl-6 justify-center items-center rounded-full"
              style={{ backgroundColor: '#6438F4' }}
            >
              <p className="text-base text-white font-medium leading-6 font-main text-center ">
                Join now
              </p>
              <FaArrowRight className="text-white " />
            </button>
          </div>
        </div>

        {/*



        VERSAO DESKTOP




        */}
        <div className="hidden lg:flex flex-col gap-8 mt-16 z-20">
          <div className="flex flex-col lg:flex-row gap-8">
            <div
              data-aos="zoom-in"
              className="group flex flex-col justify-between items-start border rounded-2xl border-solid relative gap-32 hover:shadow-custom3 duration-300 w-full"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col p-6 gap-6 justify-between">
                <div className="flex flex-col gap-4">
                  <p
                    className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                    style={{
                      color: 'var(--base-color-base-white-color, #E7E7EF)',
                    }}
                  >
                    FUND
                  </p>
                  <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                    CryptoSync Team
                  </p>
                </div>
                <div className="flex justify-between">
                  <p
                    className="text-base font-main"
                    style={{ color: '#898994' }}
                  >
                    Merge expert trading with AI for steady capital growth and
                    risk management.
                  </p>
                </div>
              </div>
              <div className="rounded-lg m-6 size-10 flex flex-col items-center  static bottom-0 justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>

              <img
                src={cryptosync}
                alt=""
                className="w-auto h-[250px] absolute bottom-0 right-0 filter invert-1 group-hover:invert"
              />
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div
                data-aos="zoom-in"
                className="p-6 h-full flex flex-row justify-between items-start border rounded-2xl border-solid relative group hover:shadow-custom3 duration-300"
                style={{
                  borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                  background: '#0C0C0D',
                }}
              >
                <div className="flex flex-col gap-6 ">
                  <div className="flex flex-col gap-4">
                    <p
                      className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                      style={{
                        color: 'var(--base-color-base-white-color, #E7E7EF)',
                      }}
                    >
                      FUND
                    </p>
                    <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                      Bitcoin Maximalism{' '}
                    </p>
                  </div>
                  <p
                    className="text-base font-main"
                    style={{ color: '#898994' }}
                  >
                    Grow your Bitcoin holdings for the long term, strategically
                    increasing your assets.
                  </p>
                  <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                    <GoArrowUpRight className="text-white text-2xl" />
                  </div>
                </div>

                <img
                  src={bitcoin}
                  alt=""
                  className="w-[200px] h-auto m-auto filter invert-1 group-hover:invert"
                />
              </div>
              <div
                data-aos="zoom-in"
                className="p-6 h-full flex flex-row justify-between items-start border rounded-2xl border-solid relative group hover:shadow-custom3 duration-300"
                style={{
                  borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                  background: '#0C0C0D',
                }}
              >
                <div className="flex flex-col gap-6 ">
                  <div className="flex flex-col gap-4">
                    <p
                      className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                      style={{
                        color: 'var(--base-color-base-white-color, #E7E7EF)',
                      }}
                    >
                      FUND
                    </p>
                    <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
                      The Next Gem
                    </p>
                  </div>
                  <p
                    className="text-base font-main"
                    style={{ color: '#898994' }}
                  >
                    Invest boldly in small-cap cryptocurrencies with high growth
                    potential.
                  </p>
                  <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                    <GoArrowUpRight className="text-white text-2xl" />
                  </div>
                </div>

                <img
                  src={cryptoindex}
                  alt=""
                  className="w-auto h-[180px] m-auto filter invert-1 group-hover:invert"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 ">
            <div
              data-aos="zoom-in"
              className="p-6 flex flex-col justify-between items-start  group border rounded-2xl border-solid w-full relative gap-32 hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                <div className="flex justify-between ">
                    <p
                      className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
                      style={{
                        color: 'var(--base-color-base-white-color, #E7E7EF)',
                      }}
                    >
                      FUND
                    </p>
                    <div className="flex items-center justify-center px-3 py-1 rounded-[38px] bg-[#2B8A3E33]">
                      <span className="text-[#2B8A3E] font-main text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  className="text-base font-main w-2/3"
                  style={{ color: '#898994' }}
                >
                  Gain strategic insights and market trends with our most recent
                  report.
                </p>
              </div>

              <div className="rounded-lg size-10 flex flex-col items-center justify-center bg-[#161618] group-hover:bg-[#6539F4]">
                <GoArrowUpRight className="text-white text-2xl" />
              </div>
              <img
                src={inovation}
                alt=""
                className="w-auto h-[206px] absolute bottom-0 filter invert-1 group-hover:invert right-0"
              />
            </div>
            <div
              data-aos="zoom-in"
              className="p-6 flex flex-col justify-between items-start border rounded-2xl border-solid w-full relative group hover:shadow-custom3 duration-300"
              style={{
                borderColor: 'var(--grey-corlos-gray-700, #1A1A1E)',
                background: '#0C0C0D',
              }}
            >
              <img src={plane} alt="" className="max-h-[90px]" />
              <div className="flex flex-col gap-4 text-center md:text-start">
                <p className="text-white font-main font-semibold text-[28px]">
                  SMSF Solution
                </p>
                <p
                  className="font-main text-base max-w-[592px]"
                  style={{ color: 'rgba(137, 137, 148, 0.80)' }}
                >
                  We provide expert support for setting up and integrating your
                  Self-Managed Super Fund (SMSF) with our service.
                </p>
              </div>
              <button
                className="flex gap-[10px] py-3 pr-8 pl-6 justify-center items-center rounded-full"
                style={{ backgroundColor: '#6438F4' }}
              >
                <p className="text-base text-white font-medium leading-6 font-main text-center ">
                  Join Now
                </p>
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
