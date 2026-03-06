import { useNavigate } from "react-router-dom";

export const PcBuilder = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-5 pb-1">
                    <span className="font-bold gfontsecond text-gray-700">Build Your PC</span>
                </div>
            </div>
            <div className="flex justify-center items-center h-[10rem]">
                <div className="flex justify-center items-end w-300 m:w-120 h-full buildbg pb-4 relative overflow-hidden">

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/25" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <p className="text-white text-xs font-semibold tracking-widest uppercase drop-shadow">
                            Customize every component
                        </p>
                        <button
                            onClick={() => navigate('/buildnow')}
                            className="text-white w-52 h-11 bg-blue-500 hover:bg-blue-400 rounded-xl text-lg font-bold shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl">
                            ⚙ Build Now
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};