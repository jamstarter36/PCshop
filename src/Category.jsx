import { useNavigate } from 'react-router-dom';

export const Category=()=>{
    const navigate = useNavigate();
    return(
        <>  
        <div className="flex flex-row justify-center items-center mt-1">
            <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-1">
                <span className="font-bold gfontsecond">Categories</span>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 w-300 m:w-120 h-full bg-gray-200 gap-2 p-2 overflow-hidden">
                <div className="bg-white shadow-sm flex flex-col justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600 cursor-pointer" onClick={() => navigate('/laptop')}>
                    <div className="laptopcat w-8 h-8 md:w-14 md:h-14"></div>
                    <span className="gfontsecond text-xs md:text-base">Laptop</span>
                </div>
                <div className="bg-white shadow-sm flex flex-col justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600 cursor-pointer" onClick={() => navigate('/pcparts')}>
                    <div className="partscat w-8 h-8 md:w-14 md:h-14"></div>
                    <span className="gfontsecond text-xs md:text-base">PC Parts</span>
                </div>
                <div className="bg-white shadow-sm flex flex-col justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600 cursor-pointer" onClick={() => navigate('/peripherals')}>
                    <div className="peripheralscat w-8 h-8 md:w-14 md:h-14"></div>
                    <span className="gfontsecond text-xs md:text-base">Peripherals</span>
                </div>
                <div className="bg-white shadow-sm flex flex-col justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600 cursor-pointer" onClick={() => navigate('/others')}>
                    <div className="accesscat w-8 h-8 md:w-14 md:h-14"></div>
                    <span className="gfontsecond text-xs md:text-base">Others</span>
                </div>
            </div>
        </div>
        </>
    );
};