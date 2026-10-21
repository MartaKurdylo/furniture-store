import { useCart } from '../context/CartContext.jsx';
import './Header.scss';

export default function Header() {
  const { count, open } = useCart();

  return (
    <header className="header">
      <a className="header__logo" href="#top">
        Sosna
      </a>
      <nav className="header__nav" aria-label="Main">
        <a href="#shop">Shop</a>
        <a href="#why">Why Sosna</a>
        <a href="#visit">Visit</a>
      </nav>
      <button className="header__cart" type="button" onClick={open} aria-label={`Open cart, ${count} items`}>
        Cart
        {/* The key restarts the small "bump" animation whenever the number changes. */}
        <span key={count} className="header__count">
          {count}
        </span>
      </button>
    </header>
  );
}
