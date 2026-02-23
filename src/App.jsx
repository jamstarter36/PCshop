import { Navigation } from './Navigation'
import { MainContentBody } from './MainContentBody'
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <>
    <CartProvider>
      <div className='p-2'>
          <Navigation/>    
          <MainContentBody/>
      </div>
    </CartProvider>
    </>
  )
}
export default App
