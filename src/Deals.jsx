export const Deals=()=>{
    return(
        <>
        <div className="flex flex-row justify-center items-center">
            <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-5">
                <span className="font-bold gfontsecond">Hot Deals</span>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row w-300 m:w-120 h-full bg-gray-200 p-1">
                <div className="grid grid-cols-3 w-full bg-gray-200 gap-1">
                    <div className="border-2 border-gray-300 w-full">1</div>
                    <div className="border-2 border-gray-300 w-full">2</div>
                    <div className="border-2 border-gray-300 w-full">3</div>    
                </div>
            </div>
        </div>
        </>
    );
};