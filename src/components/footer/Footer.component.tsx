import logo from '/images/logo-cryptosync.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import BackgroundFooter from "/images/background-footer.png";


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
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col gap-10 justify-center items-center">
            <img src={logo} className="w-[227px] h-[70px]" />
            <div className="flex flex-col items-center gap-5">
              <p className="text-white text-xl font-main font-semibold">
                Find us at:
              </p>
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
          <p className='font-main text-[#A4A4AD] text-sm'>
            © 2024 CRYPTOSYNC AI PTY LTD | All rights reserved
          </p>
          <div className='hidden md:block w-full border border-solid border-white border-opacity-10'/>
        </div>
      </div>
    </div>
  );
};


{/*  */}