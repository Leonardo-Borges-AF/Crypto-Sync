import logo from "/images/Logo-crypto.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import BackgroundFooter from "/images/background-footer.png";
import { Badge } from "../Badge";


type TProps = {
  children?: React.ReactNode;
};

export const Footer = ({ children }: TProps) => {
  return (
    <div
      className="py-16 px-5 md:px-[91px] flex flex-col gap-8"
      style={{
        backgroundImage: `url(${BackgroundFooter})`,
        backgroundSize: "cover",
        backgroundColor: "#080809",
      }}
    >
      {children}
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start w-full relative justify-between pb-10 lg:pb-0 gap-10 ">
          <div className="flex flex-col items-start w-full md:w-min lg:w-fit h-full">
            <div className="flex flex-col gap-10 items-start">
              <div className="flex flex-col items-start gap-6">
                <img
                  src={logo}
                  alt="logoCryptosync"
                  className="max-w-[160px]"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <h4 className="text-white text-lg font-semibold font-main">
                  Encontrar-nos no
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => (window.location.href = 'https://www.linkedin.com/company/nortechofficial/')}
                    className="rounded-full flex items-center justify-center p-2 size-10"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <FaLinkedinIn className="size-full text-white" />
                  </button>
                  <button
                    className="rounded-full flex items-center justify-center p-2  size-10"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <FaFacebookF className="size-full text-white" />
                  </button>
                  <button
                    onClick={() => (window.location.href = 'https://x.com/NortechOfficial')}
                    className="rounded-full flex items-center justify-center p-2 size-10"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >

                    <BsTwitterX className="size-full text-white" />
                  </button>
                  <button
                    onClick={() => (window.location.href = 'https://www.instagram.com/nortech_official/')}
                    className="rounded-full flex items-center justify-center p-2 size-10"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <AiFillInstagram className="size-full text-white" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-[#898994] font-main text-sm absolute bottom-0">
              © 2024 Nortech labs | All rights reserved
            </p>
          </div>
          <div className="flex flex-col gap-6 items-start mb-12 w-full lg:w-fit">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-20 justify-end w-full">
              <div className="flex flex-col gap-6 ">
                <p className="text-white font-main text-lg font-semibold ">
                  Funds
                </p>
                <div className="flex flex-col gap-[18px]">
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm"
                  >
                    CryptoSync Team
                  </a>
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    Bitcoin Maximalism
                  </a>
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    The Next Gem
                  </a>
                  <div className=" flex gap-1">
                    <a
                      href=""
                      className="text-[#898994] hover:text-[#6438F4] font-main text-sm flex flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-2 text-nowrap"
                    >
                      Venture Fund{" "}
                      <Badge text="Coming Soon" className="text-nowrap" />
                    </a>
                  </div>

                </div>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="text-white font-main text-lg font-semibold ">
                  General
                </p>
                <div className="flex flex-col gap-[18px]">
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    SMSF Solution
                  </a>
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    Support 24 hours
                  </a>
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    Partners
                  </a>
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    Newsletter
                  </a>
                </div>
              </div>
              <div className=" flex-col gap-6 hidden md:flex ">
                <p className="text-white font-main text-lg font-semibold ">
                  jurídico
                </p>
                <div className="flex flex-col gap-[18px]">
                  <a
                    href=""
                    className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                  >
                    Política de Privacidade
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex-col gap-6 md:hidden flex ">
              <p className="text-white font-main text-lg font-semibold ">
                jurídico
              </p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href=""
                  className="text-[#898994] hover:text-[#6438F4] font-main text-sm "
                >
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" w-full border border-solid my-8 hidden md:flex"
          style={{ borderColor: "rgba(255, 255, 255, 0.10)" }}
        />
      </div>
    </div>
  );
};
