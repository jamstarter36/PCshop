export const PcBuilder=()=>{
    return(
        <>
        <div className="flex flex-row justify-center items-center">
            <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-5">
                <span className="font-bold gfontsecond">Build Your PC</span>
            </div>
        </div>
        <div className="flex justify-center items-center h-[10rem]">
            <div className="flex justify-center items-end w-300 m:w-120 h-full buildbg pb-3">
                <button className="text-white w-50 h-10 bg-blue-500 rounded-xl text-[1.5rem] font-bold shadow-md cursor-pointer">Build Now</button>
            </div>
        </div>
        </>
    );
};