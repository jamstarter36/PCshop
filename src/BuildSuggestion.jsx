import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Wanderer from './images/Suggestion/wanderer.png'
import Midway from './images/Suggestion/midway.png'
import Warp from './images/Suggestion/warp.png'
import Zenith from './images/suggestion/zenith.png'

export const BuildSuggestion=()=>{
    return(
        <>
        <div className="flex flex-row justify-center items-center">
            <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pb-2 pt-5">
                <span className="font-bold gfontsecond">Build Suggestions</span>
            </div>
        </div>
        <div className="flex justify-center w-full">
            <div className="bg-gray-200 w-full m:w-100 lg:w-300 overflow-hidden">
                <Swiper slidesPerView={3} spaceBetween={10} className="w-full h-full bg-gray-200">
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white overflow-hidden flex flex-col items-center justify-center gap-2 shadow-md p-1">
                            <img src={Wanderer} className="w-50"/>
                            <button className="bg-red-600 text-[10px] md:text-[25px] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl cursor-pointer">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 shadow-md p-1">
                            <img src={Midway} className="w-50"/>
                            <button className="bg-amber-600 text-[10px] md:text-[25px] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl cursor-pointer">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 shadow-md p-1">
                            <img src={Warp} className="w-50"/>
                            <button className="bg-purple-600 text-[10px] md:text-[25px] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl cursor-pointer">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 shadow-md p-1">
                            <img src={Zenith} className="w-50"/>
                            <button className="bg-blue-600 text-[10px] md:text-[25px] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl cursor-pointer">View Build</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        </>  
    );
};
