import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <div className="home page">
      <section className="hero">
        <p className="eyebrow">Welcome</p>
        <h1>Everyday essentials, all in one place.</h1>
        <p className="hero-text">
          Browse the collection, add what you like, and review your cart whenever you are ready.
        </p>
        <Link to="/products" className="btn btn-primary">Shop now</Link>
      </section>

      <section className="steps">
        <article className="step">
          <span className="step-number">1</span>
          <h2>Browse</h2>
          <p>Look through every product in the shop.</p>
        </article>
        <article className="step">
          <span className="step-number">2</span>
          <h2>Add</h2>
          <p>Put your favourites in the cart and watch the counter grow.</p>
        </article>
        <article className="step">
          <span className="step-number">3</span>
          <h2>Review</h2>
          <p>Change quantities or remove items before you finish.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;
