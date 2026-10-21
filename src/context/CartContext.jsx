import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { PRODUCTS } from '../data/products.js';

const STORAGE_KEY = 'sosna-cart';
const CartContext = createContext(null);

// The cart is an object of { productId: quantity }.
function cartReducer(items, action) {
  if (action.type !== 'change') return items;
  const next = (items[action.id] || 0) + action.delta;
  if (next > 0) return { ...items, [action.id]: next };
  const { [action.id]: removed, ...rest } = items;
  return rest;
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can be blocked; the cart still works for this visit.
    }
  }, [items]);

  const change = useCallback((id, delta) => dispatch({ type: 'change', id, delta }), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const lines = Object.entries(items)
      .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === Number(id)), qty }))
      .filter((line) => line.product);
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const total = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0);
    return { lines, count, total, isOpen, change, open, close };
  }, [items, isOpen, change, open, close]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
