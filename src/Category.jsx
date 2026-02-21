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
                <div className="bg-white shadow-sm flex justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600" onClick={() => navigate('/laptop')}>
                    <div className="laptopcat"></div>
                    <span className="gfontsecond">Laptop</span>
                </div>
                <div className="bg-white shadow-sm flex justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600" onClick={() => navigate('/pcparts')}>
                    <div className="partscat"></div>
                    <span className="gfontsecond">PC Parts</span>
                </div>
                <div className="bg-white shadow-sm flex justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600" onClick={() => navigate('/peripherals')}>
                    <div className="peripheralscat"></div>
                    <span className="gfontsecond">Peripherals</span>
                </div>
                <div className="bg-white shadow-sm flex justify-center items-center p-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-blue-600" onClick={() => navigate('/others')}>
                    <div className="accesscat"></div>
                    <span className="gfontsecond">Others</span>
                </div>
            </div>
        </div>
        </>
    );
};