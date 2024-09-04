import { GoArrowUpRight } from "react-icons/go";
import Sombra from "/images/Sombra.svg";

export const Session2 = () => {
  return (
    <div className="py-20 px-12 flex flex-col gap-14 items-start max-w-[1280px] mx-auto">
      <div className="justify-between items-end flex w-full">
        <div className="flex flex-col gap-4 justify-center items-start">
          <div className="flex flex-col gap-4 items-start">
            <p className="text-white font-light font-main text-sm tracking-[0.7]">
              OBJETIVO
            </p>
            <h3 className="font-main text-[38px] font-bold text-gradient">
              Bitcoin funds
            </h3>
          </div>
          <p className="text-[#65666D] font-main ">
            Fornecer acesso seguro a um portfólio diversificado de ativos
            digitais <br />
            que deverá produzir um retorno positivo no médio prazo
          </p>
        </div>
        <button className="bg-[#6438F4] flex gap-[10px] py-4 px-[38px] items-center justify-center rounded-full">
          <p className="text-white text-center font-main font-medium">
            Request to join
          </p>
          <GoArrowUpRight className="text-white text-2xl" />
        </button>
      </div>
      <div className="p-8 flex gap-7 items-center rounded-3xl bg-[#0F0F11]">
        <div className="p-6 flex flex-col items-start rounded-xl bg-[#131316] w-[700px] ">
          {/* Videos
                    sombra
                 */}
          <img src={Sombra} alt="" />
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-center items-start gap-4">
            <h4 className="font-main text-[28px] font-bold leading-9 text-gradient">
              About funds
            </h4>
            <p className="text-[#65666D] font-main ">
              The DigitalX Bitcoin Fund provides a secure and inexpensive way
              for wholesale investors to gain exposure to Bitcoin without the
              uncertainty and additional risk associated with other digital
              assets. Investors benefit from economies of scale to access
              institutional custody, insurance and independent administration
              services in a cost effective unit trust structure.
              <br />
              The Fund operates a passive buy-and-hold investment strategy
              offering investors diversification and lower correlation to
              traditional asset classes.
            </p>
          </div>
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <div className="p-6 flex flex-col items-start gap-[10px] rounded-xl bg-[#131316] w-full">
                <h5 className="font-main font-semibold text-white">
                  INCEPTION
                </h5>
                <p className="text-[#65666D] font-medium font-main">
                  December 2019
                </p>
              </div>
              <div className="p-6 flex flex-col items-start gap-[10px] rounded-xl bg-[#131316] w-full">
                <h5 className="font-main font-semibold text-white">RATING</h5>
                <p className="text-[#65666D] font-medium font-main">
                  Investiment Grade(SQM)
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <div className="p-6 flex flex-col items-start gap-[10px] rounded-xl bg-[#131316] w-full">
                <h5 className="font-main font-semibold text-white">FEES</h5>
                <div>
                  <span className="text-white font-medium font-main">
                    1,65%
                  </span>{" "}
                  <span className="text-[#65666D] font-medium font-main">
                    managemant fee No performance fee
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col items-start gap-[10px] rounded-xl bg-[#131316] w-full">
                <h5 className="font-main font-semibold text-white">
                  LIQUIDITY
                </h5>
                <div>
                  <span className="text-[#65666D] font-medium font-main">
                    Fortnightly(
                  </span>
                  <span className="text-white font-medium font-main">$25k</span>
                  <span className="text-[#65666D] font-medium font-main">
                    minimum subscription)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
