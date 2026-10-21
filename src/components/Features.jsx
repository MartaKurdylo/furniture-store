import './Features.scss';

const FEATURES = [
  { title: 'Free delivery over $300', text: 'Orders above $300 ship free, and we carry larger pieces to the room you choose.' },
  { title: '30-day returns', text: 'Live with it for a month. If it does not fit your space, we collect it.' },
  { title: '5-year warranty', text: 'Every frame is guaranteed for five years against defects in wood and joinery.' },
];

export default function Features() {
  return (
    <section className="section features" id="why">
      <h2 className="section__title">Why Sosna</h2>
      <ul className="features__list">
        {FEATURES.map(({ title, text }) => (
          <li key={title} className="features__item">
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
