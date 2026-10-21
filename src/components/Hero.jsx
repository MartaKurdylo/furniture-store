import FurnitureArt from './FurnitureArt.jsx';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero__text">
        <h1 className="hero__title">Furniture that makes small rooms feel generous.</h1>
        <p className="hero__lead">
          Solid pine, simple joinery and shapes sized for real apartments. Delivered flat or fully built.
        </p>
        <a className="btn" href="#shop">
          Shop the collection
        </a>
      </div>
      <div className="hero__art">
        <FurnitureArt className="hero__sofa" type="sofa" color="#4f7a6b" />
        <FurnitureArt className="hero__lamp" type="lamp" color="#e3a23b" />
      </div>
    </section>
  );
}
