import Promobg from './images/promoban.png'
export const Promo=()=>{
    return(
        <>
        <div className="flex justify-center items-center h-[10rem] mt-1 ">
            <div className="flex justify-center items-center w-300 m:w-120 h-full border-3 border-gray-500">
                <img src={Promobg} className='bg-cover' />
            </div>
        </div>
        </>
    );
};