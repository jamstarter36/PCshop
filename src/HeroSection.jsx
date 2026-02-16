import Msi from './images/Hero/MSI.png'
import Rog from './images/Hero/ROG.png'
import Aorus from './images/Hero/AORUS.png'
import Asrock from './images/Hero/ASRock.png'
import Tuf from './images/Hero/TUF.png'
import Rtx from './images/Hero/RTX.png'
import Amd from './images/Hero/AMD.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

export const HeroSection=()=>{
    return(
        <>
        <div className="flex justify-center bg-black/60 w-full p-2">
            <div className="flex justify-center items-center w-full max-w-[1200px] bg-black/50">
                <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="w-full"
                >
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Msi} alt="MSI" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Rog} alt="ROG" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Aorus} alt="Aorus" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Asrock} alt="Asrock" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Tuf} alt="TUF" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Rtx} alt="RTX" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img src={Amd} alt="AMD" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    );
};