import { BackgroundDashed } from '~/components/BackgroundDashed.component'

export const Session5 = () => {

  return (

    <>
    <div className="bg-[#080809]">
        
        <div className=" relative max-w-[1280px] mx-auto ">
        <BackgroundDashed />
            <div className="flex flex-col md:py-20 relative z-20 gap-[35px] items-center">
                <p className="font-main font-semibold text-[34px] text-center text-white">
                    Join Our Newsletter and Get 30% Off at Launch!  
                </p>
                <p className="fomt-main text-xl text-center text-white leading-8">
                    Sign up for our newsletter today and receive 
                    an exclusive 30% discount coupon when we launch 
                    our premium <br /> platform. Don't miss out on this 
                    special offer – be the first to know and save big!
                </p>
                <div className="flex gap-6">
                    <input 
                    type="text" 
                    placeholder="Name"
                    className="bg-white border relative border-black border-opacity-20 items-center px-[38px] py-4 text-black rounded-[10px]"
                    />
                    <input 
                    type="text" 
                    placeholder="E-mail"
                    className="bg-white border border-black border-opacity-20 items-center px-[38px] py-4 text-black rounded-[10px]"
                    />
                    <button className="bg-[#6438F4] px-[38px] py-4 rounded-full items-center">
                        <p className="text-white font-main font-extrabold text-center">
                            SIGN UP
                        </p>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
