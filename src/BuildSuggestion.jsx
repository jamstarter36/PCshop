import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
                <Swiper slidesPerView={2} spaceBetween={10} className="w-full h-full bg-gray-200">
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white overflow-hidden flex flex-col items-center justify-center gap-2 rounded-xl shadow-md">
                            Wanderer
                            <button className="bg-red-600 text-[1.5rem] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 rounded-xl shadow-md">
                            Midway
                            <button className="bg-amber-600 text-[1.5rem] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 rounded-xl shadow-md">
                            Warp
                            <button className="bg-purple-600 text-[1.5rem] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl">View Build</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]  bg-white overflow-hidden flex flex-col items-center justify-center gap-2 rounded-xl shadow-md">
                            Zenith
                            <button className="bg-blue-600 text-[1.5rem] pr-3 pl-3 pt-1 pb-1 rounded-lg text-white shadow-xl">View Build</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        </>  
    );
};
