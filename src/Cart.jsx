import { useCart } from './context/CartContext';

export const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(',', ''));
        return sum + price;
    }, 0);

    return (
        <div className="flex flex-col items-center mt-1 px-2">
            <div className="flex flex-col w-full max-w-2xl bg-gray-200 p-3 min-h-30">
                <h2 className="font-bold text-lg mb-2">Your Cart</h2>           
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-sm mb-2">Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="w-full flex flex-col gap-1">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between items-center bg-white shadow-sm p-2 text-sm">
                                    <span>{item.name}</span>
                                    <div className="flex items-center gap-2 ml-4 shrink-0">
                                        <span className="text-red-500">₱{item.price}</span>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-gray-400 hover:text-red-500 cursor-pointer">
                                            ✕
                                        </button>
                                    </div>
                                </li>
                            ))}
                            <p className="text-gray-500 text-sm mt-1 italic">Please double check your item before checking out</p>
                        </ul>
                        <div className="flex justify-between mt-2 border-t border-gray-400 pt-2 font-bold text-sm">
                            <span>Total</span>
                            <span className="text-red-500">₱{total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                            
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='bg-green-600 p-1 w-50 hover:bg-green-500 transition-transform duration-300 ease-in-out hover:scale-120 hover:font-bold hover:text-white mt-2'>Checkout</button>
                        </div>
                        
                    </>
                )}
                
            </div>
        </div>
    );
};