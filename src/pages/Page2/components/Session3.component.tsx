import { GoArrowUpRight } from "react-icons/go";
import bitcoin from "/images/bitcoin.png";
import cryptoindex from "/images/cryptoindex.png";
import cryptosync from "/images/cryptosync.png";
import inovation from "/images/inovation.png";
import { BackgroundDashed } from "~/components/BackgroundDashed.component";

export const Session3 = () => {
  return (
    <div style={{ backgroundColor: "rgb(8,8,9)" }}>
      <div className="py-[100px] relative max-w-[1280px] mx-auto px-5 md:px-20">
        <BackgroundDashed />
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col md:flex-row justify-between w-full z-20">
            <div className="flex flex-col gap-4">
              <p className="text-white text-sm font-main font-light leading-5 -tracking-[0.7px]">
                FUNDS
              </p>
              <p className="titleEffect md:(font-main font-bold -tracking-widest) text-4xl md:text-5xl">
                Invest in digital assets through a <br />
                managed investment scheme.
              </p>
            </div>
            <p
              className="md:text-right font-main text-lg leading-7 flex items-end mt-4 md:mt-0"
              style={{ color: "rgba(137, 137, 148, 0.80)" }}
            >
              Immediate Access to Exclusive <br /> Resources and Support.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-16 z-20">
          <div className="flex flex-col gap-8">
            <Card
              aboveTitle="FUND"
              title="Bitcoin"
              description="Gain strategic insights and market trends with our most recent report."
              img={
                <img
                  src={bitcoin}
                  alt=""
                  className="w-[128px] h-auto filter invert-1 group-hover:invert"
                />
              }
            />
            <Card
              aboveTitle="FUND"
              title="Crypto Index"
              description="Gain strategic insights and market trends with our most recent report."
              img={
                <img
                  src={cryptoindex}
                  alt=""
                  className="w-[148px] h-auto filter invert-1 group-hover:invert"
                />
              }
            />
            <Card
              aboveTitle="FUND"
              title="CryptoSync Team"
              description="Gain strategic insights and market trends with our most recent report."
              img={
                <img
                  src={cryptosync}
                  alt=""
                  className="w-[148px] h-auto filter invert-1 group-hover:invert"
                />
              }
            />
            <Card
              aboveTitle="FUND"
              title="Inovation Fund"
              description="Gain strategic insights and market trends with our most recent report."
              img={
                <img
                  src={inovation}
                  alt=""
                  className="w-[148px] h-auto filter invert-1 group-hover:invert"
                />
              }
            />
            <Card
              aboveTitle="FUND"
              title="Exponential Coins"
              description="Gain strategic insights and market trends with our most recent report."
              img={
                <img
                  src={bitcoin}
                  alt=""
                  className="w-[128px] h-auto filter invert-1 group-hover:invert"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type TCard = {
  aboveTitle: string;
  title: string;
  description: string;
  img: React.ReactNode;
};

const Card = ({ aboveTitle, title, description, img }: TCard) => {
  return (
    <div
      className="group p-6 flex flex-row justify-between items-center border rounded-2xl border-solid relative gap-48 hover:shadow-custom3 duration-300"
      style={{
        borderColor: "var(--grey-corlos-gray-700, #1A1A1E)",
        background: "#0C0C0D",
      }}
    >
      <div className="flex flex-col gap-3 justify-between">
        <p
          className="text-sm font-main font-light leading-5 -tracking-[0.7px]"
          style={{
            color: "var(--base-color-base-white-color, #E7E7EF)",
          }}
        >
          {aboveTitle}
        </p>
        <p className="text-white group-hover:text-[#6539F4] font-main text-[28px] font-semibold ">
          {title}
        </p>
        <div className="flex justify-between">
          <p className="text-base font-main" style={{ color: "#898994" }}>
            {description}
          </p>
        </div>
        <div className="rounded-lg size-10 flex flex-col items-center  static bottom-0 justify-center bg-[#161618] group-hover:bg-[#6539F4] mt-10">
          <GoArrowUpRight className="text-white text-2xl" />
        </div>
      </div>

      {img}
    </div>
  );
};
