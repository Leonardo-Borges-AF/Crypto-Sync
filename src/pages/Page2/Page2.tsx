import { Footer } from "~/components/footer/Footer.component";
import { Header } from "~/components/header/Header.components";
import { Session1 } from "./components/Session1.component";
import { Session3 } from "./components/Session3.component";
import { Session4 } from "./components/Session4.component";
import { GoArrowRight } from "react-icons/go";
import { Session2 } from "./components/Session2.components";


export const Page2 = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <Header />
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Footer>
        <div className="p-20 text-center flex flex-col justify-center items-center gap-14 border-b border-[#FFFFFF] border-opacity-10">
          <div className="flex flex-col gap-6">
            <p className="titleEffect md:(font-main font-bold -tracking-widest) text-4xl text-center">
              See where financial automation can <br /> take your business.
            </p>
            <span className="text-base text-[#85858D]">
              The first financial tool you'll love. And the last one you'll ever
              need.
            </span>
          </div>
          <button
            className={`flex px-[38px] py-4 justify-center items-center border rounded-full bg-[#6438F4] w-fit gap-4`}
          >
            <p className="text-white text-center font-main text-base font-medium leading-6">
              Start Now
            </p>
            <GoArrowRight className="text-white text-2xl" />
          </button>
        </div>
      </Footer>
    </div>
  );
};
