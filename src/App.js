import './App.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Time for your next adventure</h1>
        <p>Let us plan it for you</p>
        <button className="btn">Book Now</button>
      </div>
    </section>
  );
}

function TravelInfo() {
  return (
    <section className="travel-info">
      <div className="info-content">
        <h2>Travel made easy</h2>
        <p>
          Lucky Home is a luxury rental platform specializing in high-end villas and apartments in Morocco. Clients can experience luxury hotel-style hospitality in private, comfortable settings.
        </p>
        <div className="btn-group">
          <button className="btn">Latest Promos</button>
          <button className="btn">Our Offerings</button>
        </div>
      </div>
      <div className="info-image">
        <img src="https://i.imgur.com/i0l7nFZ.jpeg" alt="Travel" />
      </div>
    </section>
  );
}

function Promos() {
  return (
    <section className="promos">
      <h2>Summer Deals Promo</h2>
      <div className="promo-cards">
        <div className="card">
          <h3>Family Vacations</h3>
          <p>Starts at $45</p>
          <ul>
            <li>Family-Friendly Accommodations</li>
            <li>Childcare Services</li>
          </ul>
          <button className="btn">Book Now</button>
        </div>
        <div className="card">
          <h3>Events (Weddings, Meetings)</h3>
          <p>Starts at $200</p>
          <ul>
            <li>Event Planning & Coordination</li>
            <li>Catering Services</li>
          </ul>
          <button className="btn">Book Now</button>
        </div>
        <div className="card">
          <h3>Personal Chauffeur</h3>
          <p>Starts at $50/day</p>
          <ul>
            <li>Airport Transfer</li>
            <li>City-to-City Tours</li>
          </ul>
          <button className="btn">Book Now</button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Hero />
      <TravelInfo />
      <Promos />
    </div>
  );
}

export default App;