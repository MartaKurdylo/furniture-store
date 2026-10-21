# Sosna: furniture store

A responsive furniture store front end built with **React**, **Vite** and **SCSS**.

**Live demo:** _add your GitHub Pages link here_

Sosna is a fictional brand. Checkout is not connected to a payment system.

## Features

- Responsive layout for phones, tablets and desktops
- Category filters and sorting by price
- Working cart: add items, change quantities, see the total
- Cart is saved in the browser (localStorage)
- Furniture illustrations drawn as SVG, so there are no image files to load
- Accessible: keyboard friendly, visible focus, labelled controls, Escape closes the cart, respects `prefers-reduced-motion`

## Tech

React 18 (function components, hooks, Context + `useReducer`), Vite, SCSS (variables, mixins, nesting, BEM naming).

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). Build for production with `npm run build`.

## Project structure

```
src/
  main.jsx                 app entry point
  App.jsx                  page layout and providers
  data/products.js         product list (add new products here)
  context/CartContext.jsx  cart state: reducer, localStorage, drawer open/close
  components/
    Header, Hero, Shop, ProductCard, Features, Footer, CartDrawer
    FurnitureArt.jsx       SVG illustrations
    *.scss                 styles live next to their component
  styles/
    abstracts/             design tokens (_tokens) and mixins (_mixins)
    global.scss            reset, base styles, shared .section and .btn
```

Each component imports its own `.scss` file, and every `.scss` file pulls in the shared tokens and mixins with
`@use '../styles/abstracts' as *;`. Class names follow BEM (`card__price`, `btn--accent`).

## Deploy to GitHub Pages

1. Push this project to a public GitHub repository (branch `main`).
2. In the repository open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The included workflow builds and publishes the site on every push to `main`.
   It appears at `https://<your-username>.github.io/<repository-name>/`.
