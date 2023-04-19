import { Link } from "react-router-dom";
import { useState } from "react";
export default function Subscribe(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = (state, setState) => {
    setState(!state);
  };

  const arrowDirection = (direction) => {
    return direction ? (
      <i className="arrowUp"></i>
    ) : (
      <i className="arrowDown"></i>
    );
  };
  return (
    <>
      <header>
        <img
          src="assets/shared/desktop/logo.svg"
          alt="logo"
          className="logo"
        ></img>
        <menu>
          <ul>
            <li>{<Link to="/">HOME</Link>}</li>
            <li>{<Link to="/AboutUs"> ABOUT US</Link>}</li>
            <li>{<Link to="/Subscribe"> CREATE YOUR PLAN</Link>}</li>
          </ul>
        </menu>
      </header>
      <section className="createAPlan">
        <img src="assets/plan/desktop/image-hero-blackcup.jpg" alt="blackcup" />
        <div className="createHero">
          <h1>Create a plan</h1>
          <p>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </section>
      <section className="howItWorks2">
        <div className="line2">
          <div className="ovalContainer">
            <div className="oval1"></div>
            <div className="oval2"></div>
            <div className="oval3"></div>
          </div>
        </div>
        <div className="path">
          <div className="pathCard">
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="pathCard">
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="pathCard">
            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </section>
      <section className="creationSection">
        <ul className="highlightSection">
          <li>
            <button>
              <span>01</span>&ensp;&ensp;Preferences
            </button>
          </li>
          <li>
            <button>
              <span>02</span>&ensp;&ensp;Bean Type
            </button>
          </li>
          <li>
            <button>
              <span>03</span>&ensp;&ensp;Quantity
            </button>
          </li>
          <li>
            <button>
              <span>04</span>&ensp;&ensp;Grind Option
            </button>
          </li>
          <li>
            <button>
              <span>05</span>&ensp;&ensp;Deliveries
            </button>
          </li>
        </ul>
        <div className="optionSection">
          <button onClick={() => handleOpen(open, setOpen)}>
            <h1>
              How do you drink your coffee?
              {arrowDirection(open)}
            </h1>
          </button>
          {open === true && <div>Hello World</div>}
          <button onClick={handleOpen}>
            <h1>What type of coffee?{arrowDirection(open)}</h1>
          </button>
          <button onClick={handleOpen}>
            <h1>How much would you like?{arrowDirection(open)}</h1>
          </button>
          <button onClick={handleOpen}>
            <h1>Want us to grind them?{arrowDirection(open)}</h1>
          </button>
          <button onClick={handleOpen}>
            <h1>How often should we deliver?{arrowDirection(open)}</h1>
          </button>
        </div>
      </section>
      <footer>
        <div>
          <img
            src="assets/shared/desktop/logo-inverse.svg"
            alt="logo"
            className="logoFooter"
          ></img>
        </div>
        <div className="pages">
          <ul>
            <li>{<Link to="/">HOME</Link>}</li>
            <li>{<Link to="/AboutUs"> ABOUT US</Link>}</li>
            <li>{<Link to="/Subscribe"> CREATE YOUR PLAN</Link>}</li>
          </ul>
        </div>
        <div></div>
        <div>
          <ul>
            <li>
              <img src="assets/shared/desktop/icon-facebook.svg" alt="fb" />
            </li>
            <li>
              <img src="assets/shared/desktop/icon-instagram.svg" alt="ig" />
            </li>
            <li>
              <img src="assets/shared/desktop/icon-twitter.svg" alt="tweet" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
