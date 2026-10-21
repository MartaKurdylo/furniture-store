import { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../data/products.js';
import FurnitureArt from './FurnitureArt.jsx';
import './CartDrawer.scss';

export default function CartDrawer() {
  const { lines, count, total, isOpen, change, close } = useCart();
  const [note, setNote] = useState('');
  const closeButton = useRef(null);

  // While the drawer is open: lock page scroll, close on Escape, and give focus back afterwards.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
      setNote('');
    };
  }, [isOpen, close]);

  return (
    <>
      <div className={`overlay ${isOpen ? 'is-open' : ''}`} onClick={close} />
      <aside
        className={`drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        aria-hidden={!isOpen}
      >
        <div className="drawer__head">
          <h2 id="cart-title">Your cart</h2>
          <button ref={closeButton} type="button" className="drawer__close" onClick={close} aria-label="Close cart">
            &times;
          </button>
        </div>

        <ul className="drawer__list">
          {lines.length === 0 && <li className="drawer__empty">Your cart is empty. Pick something from the collection.</li>}
          {lines.map(({ product, qty }) => (
            <li key={product.id} className="line">
              <div className="line__art" style={{ background: product.bg }}>
                <FurnitureArt type={product.type} color={product.color} label={product.name} />
              </div>
              <div>
                <p className="line__name">{product.name}</p>
                <div className="line__qty">
                  <button type="button" onClick={() => change(product.id, -1)} aria-label={`Remove one ${product.name}`}>
                    &minus;
                  </button>
                  <span>{qty}</span>
                  <button type="button" onClick={() => change(product.id, 1)} aria-label={`Add one ${product.name}`}>
                    +
                  </button>
                </div>
              </div>
              <strong>{formatPrice(product.price * qty)}</strong>
            </li>
          ))}
        </ul>

        <div className="drawer__foot">
          <p className="drawer__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </p>
          <button
            type="button"
            className="btn btn--block"
            disabled={count === 0}
            onClick={() => setNote('This is a demo store, so checkout is not connected.')}
          >
            Checkout
          </button>
          <p className="drawer__note" role="status">
            {note}
          </p>
        </div>
      </aside>
    </>
  );
}
