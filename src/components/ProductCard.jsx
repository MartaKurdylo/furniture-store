import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../data/products.js';
import FurnitureArt from './FurnitureArt.jsx';
import './ProductCard.scss';

export default function ProductCard({ product }) {
  const { change } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Show "Added" for one second after a click, and clean up the timer if the card goes away.
  useEffect(() => {
    if (!justAdded) return undefined;
    const timer = setTimeout(() => setJustAdded(false), 1000);
    return () => clearTimeout(timer);
  }, [justAdded]);

  function handleAdd() {
    change(product.id, 1);
    setJustAdded(true);
  }

  return (
    <article className="card">
      <div className="card__art" style={{ background: product.bg }}>
        <FurnitureArt type={product.type} color={product.color} label={product.name} />
      </div>
      <div className="card__body">
        <div>
          <h3 className="card__name">{product.name}</h3>
          <p className="card__category">{product.category}</p>
        </div>
        <p className="card__price">{formatPrice(product.price)}</p>
      </div>
      <button type="button" className="btn btn--small card__button" onClick={handleAdd}>
        {justAdded ? 'Added' : 'Add to cart'}
      </button>
    </article>
  );
}
