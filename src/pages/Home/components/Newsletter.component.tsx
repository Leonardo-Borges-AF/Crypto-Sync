import { TPost } from "~/types/beehiiv";
import { getNortechPosts } from "~/apis/beehiiv";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";




export const Newsletter = () => {

    const progressBar = useRef<HTMLDivElement>(null);
    const [showPost, setShowPost] = useState<TPost | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    const { data } = useQuery({
    queryKey: ["getNortechPosts"],
    queryFn: () => getNortechPosts(),
    staleTime: 1000 * 60 * 60,
    });

    const restartAnimation = () => {
    setAnimationKey(animationKey + 1);
    };

    const nextPost = () => {
    if (showPost && data) {
        const nextIndex =
        data?.data.findIndex((post) => post.id === showPost.id) + 1;
        setShowPost(data?.data[nextIndex] || data?.data[0]);
        restartAnimation();
    }
    };

    const backPost = () => {
    if (showPost && data) {
        const prevIndex =
        data?.data.findIndex((post) => post.id === showPost.id) - 1;
        setShowPost(data?.data[prevIndex] || data?.data[data.data.length - 1]);
        restartAnimation();
    }
    };

    useEffect(() => {
    setShowPost(data?.data[0] || null);
    }, [data]);

    useEffect(() => {
    const interval = setInterval(() => {
        if (showPost && data) {
        const nextIndex =
            data?.data.findIndex((post) => post.id === showPost.id) + 1;
        setShowPost(data?.data[nextIndex] || data?.data[0]);
        }
    }, 20000);

    return () => clearInterval(interval);
    }, [showPost, data]);   

    return(
        <>
        <div className="bg-[#050505] relative">
            <div className="md:pl-[50px} md:px-0 px-4 pt-14 pb-6 mx-auto flex flex-col gap-8 max-w-[1280px] md:items-start items-center justify-center">
                <div className="flex flex-col gap-8">
                    <h4 className="text-white font-semibold font-sans text-3xl md:text-4xl ">
                        Stay in sync with the crypto market! Check out <br className="hidden md:block"/> our latest free reports:
                    </h4>
                </div>

                <div
                    className="w-full h-full md:h-[344px] border rounded-2xl p-8 flex flex-col relative bg-[#0D0E1C]"
                    style={{
                    borderColor: "#2A2B37",
                    backgroundImage: `url(${showPost?.thumbnail_url})`,
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-6 mt-auto z-10">
                    <h2 className="md:col-span-6 text-xl md:text-2xl text-white font-bold mb-6">
                        {showPost?.title}
                    </h2>
                    <p className="md:col-span-5 text-colorText text-base w-full md:w-[525px] mb-6 md:mb-0">
                        {/* Leia sobre as últimas tendências, descobertas educacionais e
                        histórias de sucesso da comunidade Nortech. */}
                        {showPost?.subtitle}
                    </p>
                    <a
                        href={showPost?.web_url}
                        target="_blank"
                        className="text-center col-span-1 rounded text-[#E7E7EF] bg-white bg-opacity-10 hover:text-white hover:bg-opacity-20 py-2 mt-auto duration-300"
                    >
                        Read full article
                    </a>
                    </div>

                    <div className="flex justify-between items-center mt-8 z-10">
                    <button className="bg-white bg-opacity-10 hover:bg-opacity-20 duration-300">
                        <RiArrowLeftLine size={24} color={"#fff"} onClick={backPost} />
                    </button>
                    <div className="h-2 w-full mx-4 rounded-full relative">
                        <div className="h-2 w-full rounded-full bg-white opacity-20 absolute"></div>
                        {showPost && (
                        <div
                            key={animationKey}
                            ref={progressBar}
                            className="h-2 rounded-full bg-white absolute"
                            style={{
                            animation: "progress-bar 20s linear infinite",
                            }}
                        ></div>
                        )}
                    </div>
                    <button className="bg-white bg-opacity-10 hover:bg-opacity-20 duration-300">
                        <RiArrowRightLine size={24} color={"#fff"} onClick={nextPost} />
                    </button>
                    </div>
                    <div className="from-black to-transparent bg-gradient-to-t opacity-70 h-full w-full absolute left-0 top-0 rounded-2xl"></div>
                </div>

            </div>
            
        </div>
        </>
    )
}