// To add a product, add one object here. The shop, filters and cart pick it up automatically.
export const PRODUCTS = [
  { id: 1, name: 'Lund sofa', category: 'Seating', price: 890, type: 'sofa', color: '#4f7a6b', bg: '#cfe0d6' },
  { id: 2, name: 'Arto armchair', category: 'Seating', price: 340, type: 'chair', color: '#e3a23b', bg: '#f6e3bd' },
  { id: 3, name: 'Pine dining table', category: 'Tables', price: 520, type: 'table', color: '#8a6a4f', bg: '#e3d5c8' },
  { id: 4, name: 'Nook floor lamp', category: 'Lighting', price: 120, type: 'lamp', color: '#d86b52', bg: '#f1d3cb' },
  { id: 5, name: 'Ledge bookshelf', category: 'Storage', price: 260, type: 'shelf', color: '#5c6f91', bg: '#d3dbea' },
  { id: 6, name: 'Tove chair', category: 'Seating', price: 150, type: 'chair', color: '#5c6f91', bg: '#d9d2e3' },
  { id: 7, name: 'Rue coffee table', category: 'Tables', price: 190, type: 'table', color: '#4f7a6b', bg: '#d5e4e8' },
  { id: 8, name: 'Arc table lamp', category: 'Lighting', price: 85, type: 'lamp', color: '#e3a23b', bg: '#d7e3d1' },
];

export const CATEGORIES = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

export const formatPrice = (n) => `$${n.toLocaleString('en-US')}`;
