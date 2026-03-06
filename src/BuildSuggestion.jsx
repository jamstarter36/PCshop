import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { buildsuggestion } from './data/FakeDb';
import Wanderer from './images/Suggestion/wanderer.png';
import Midway from './images/Suggestion/midway.png';
import Warp from './images/Suggestion/warp.png';
import Zenith from './images/Suggestion/zenith.png';

const images = {
    Wanderer,
    Midway,
    Warp,
    Zenith,
};

const buttonColors = {
    Wanderer: "bg-red-600 hover:bg-red-500",
    Midway:   "bg-amber-600 hover:bg-amber-500",
    Warp:     "bg-purple-600 hover:bg-purple-500",
    Zenith:   "bg-blue-600 hover:bg-blue-500",
};

export const BuildSuggestion = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pb-2 pt-5">
                    <span className="font-bold gfontsecond text-gray-700">Build Suggestions</span>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="bg-gray-200 w-full m:w-100 lg:w-300 overflow-hidden">
                    <Swiper slidesPerView={3} spaceBetween={10} className="w-full h-full bg-gray-200">
                        {buildsuggestion.map((build) => (
                            <SwiperSlide key={build.id}>
                                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white overflow-hidden flex flex-col items-center justify-center gap-2 shadow-md border border-gray-100 hover:border-3 hover:border-blue-500 hover:shadow-lg transition-all duration-200 p-1">
                                    <img src={images[build.name]} className="w-50" alt={build.name} />
                                    <button
                                        onClick={() => navigate(`/build/${build.name.toLowerCase()}`)}
                                        className={`${buttonColors[build.name]} text-[10px] md:text-[14px] px-3 py-1 rounded-lg text-white shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 font-semibold`}>
                                        View Build
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};