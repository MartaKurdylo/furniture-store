import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer" id="visit">
      <div className="section footer__visit">
        <h2 className="section__title">Visit the showroom</h2>
        <p>Open Tuesday to Saturday, 10:00 to 18:00. Bring your room measurements and we will help you plan the layout.</p>
        <a className="btn btn--accent" href="mailto:hello@sosna.example">
          hello@sosna.example
        </a>
      </div>
      <p className="footer__note">
        Sosna is a fictional store built as a front-end portfolio project. Checkout is not connected.
      </p>
    </footer>
  );
}
