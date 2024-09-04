import { GoArrowDown, GoArrowRight, GoArrowUpRight } from "react-icons/go";

export const Session1 = () => {
  return (
    <div className="flex flex-col pt-[156px] p-20 gap-16 max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-12 justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="text-[87px] font-extrabold font-Jakarta text-gradient">
              BITCOIN FUNDS
            </h1>
            <div className="flex gap-[5px]">
              <h2 className="text-white font-Jakarta text-4xl md:leading-relaxed md:text-[52px] font-extralight uppercase">
                TRADING WITH CRYPTOSYNC AI
              </h2>
              <div className="h-[2px] w-10 md:w-48 bg-white mt-7 md:mt-[60px]" />
              s
            </div>
          </div>
          <div className="flex justify-end w-full">
            <p className="flex text-[#9195A6] font-main text-lg">
              Forneça acesso seguro a um portfólio
              <br />
              diversificado de ativos digitais que deverá
              <br />
              produzir um retorno positivo no médio prazo
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full gap-6">
          <button className="bg-[#6438F4] flex gap-[10px] py-4 px-[38px] items-center justify-center rounded-full">
            <p className="text-white text-center font-main font-medium">
              Request to join
            </p>
            <GoArrowUpRight className="text-white text-2xl" />
          </button>
          <button className="bg-transparent flex gap-[10px] py-4 px-[38px] items-center justify-center rounded-full border border-solid border-[#FFFFFF33]">
            <p className="text-white text-center font-main font-medium">
              Handbook
            </p>
            <GoArrowRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <GoArrowDown className="text-[#9195A6] w-[35px] h-[45px]"/>
        <p className="text-[#9195A6] font-medium">
          We help companies design their <br />
          products to be ready for web3 world
        </p>
      </div>
    </div>
  );
};
