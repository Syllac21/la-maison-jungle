import Banner from './Banner';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList';
import Footer from './Footer.js';
import logo from '../assets/logo.png';
import '../styles/Layout.css';

function App() {
  return (
    <div>
      <Banner>
			  <img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
      <div className='lmj-layout-inner'>
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
