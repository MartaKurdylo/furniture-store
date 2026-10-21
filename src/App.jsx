import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Shop from './components/Shop.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Shop />
        <Features />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
