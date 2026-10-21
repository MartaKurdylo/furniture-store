import { useMemo, useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import './Shop.scss';

const SORTS = {
  featured: { label: 'Featured', compare: (a, b) => a.id - b.id },
  'price-asc': { label: 'Price: low to high', compare: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price: high to low', compare: (a, b) => b.price - a.price },
};

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const products = useMemo(
    () => PRODUCTS.filter((p) => category === 'All' || p.category === category).sort(SORTS[sort].compare),
    [category, sort],
  );

  return (
    <section className="section shop" id="shop">
      <h2 className="section__title">The collection</h2>

      <div className="shop__toolbar">
        <div className="shop__filters" role="group" aria-label="Filter by category">
          {CATEGORIES.map((name) => (
            <button
              key={name}
              type="button"
              className="shop__chip"
              aria-pressed={name === category}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <label className="shop__sort">
          <span>Sort by</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {Object.entries(SORTS).map(([value, { label }]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="shop__count" role="status">
        {products.length} products
      </p>

      <div className="shop__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
