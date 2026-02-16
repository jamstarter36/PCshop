export const Navigation=()=>{
    return(
        <>
        <div className="flex justify-center w-full pb-1 sticky top-0 z-50">
            <ul className="gfont flex flex-row justify-center items-center gap-5 text-black bg-white h-[2.5rem] w-full">
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">Home</li>
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">Promo</li>
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">Categories</li>
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">PC Builder</li>
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">Hot Deals</li>
                <li className="hover:border-b-2 hover:border-black cursor-pointer text-[1rem]">Shop</li>
            </ul>
        </div>
        </>
    );
};