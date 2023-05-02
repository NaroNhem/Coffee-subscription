import { Link } from "react-router-dom";
export default function Home(props) {
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
      <div className="heroContainer">
        <img
          src="assets/home/desktop/image-hero-coffeepress.jpg"
          alt="hero"
          className="heroImg"
        ></img>
        <div className="heroInfo">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          {
            <Link to="/Subscribe">
              <button className="createPlan">Create your plan</button>
            </Link>
          }
        </div>
      </div>
      <div className="collectionInfo">
        <h1 className="ourCollection">our collection</h1>
        <div className="productCollection">
          <ul className="productCards">
            <li>
              <img
                src="assets/home/desktop/image-gran-espresso.png"
                alt="gran"
                className="productImage"
              />
              <h1 className="productName">Gran Espresso</h1>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </li>
            <li>
              <img
                src="assets/home/desktop/image-planalto.png "
                alt="planalto"
                className="productImage"
              />
              <h1 className="productName">Planalto</h1>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </p>
            </li>
            <li>
              <img
                src="assets/home/desktop/image-piccollo.png "
                alt="piccollo"
                className="productImage"
              />
              <h1 className="productName">Piccollo</h1>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry.
              </p>
            </li>
            <li>
              <img
                src="assets/home/desktop/image-danche.png "
                alt="danche"
                className="productImage"
              />
              <h1 className="productName">Danche</h1>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="chooseContainer">
        <div className="whyChoose">
          <h1 className="whyTitle">Why choose us?</h1>
          <p className="whySummary">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="cardContainer">
          <div className="chooseCard">
            <img src="assets/home/desktop/icon-coffee-bean.svg" alt="bean" />
            <h1>Best Quality</h1>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="chooseCard">
            <img src="assets/home/desktop/icon-gift.svg" alt="bean" />
            <h1>Exclusive Benefits</h1>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="chooseCard">
            <img src="assets/home/desktop/icon-truck.svg" alt="bean" />
            <h1>Free Shipping</h1>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      <div className="howItWorks">
        <h3 className="howTitle">How it works</h3>
        <div className="line">
          <div className="ovalContainer">
            <div className="oval"></div>
            <div className="oval"></div>
            <div className="oval"></div>
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
        {
          <Link to="/Subscribe">
            <button className="createPlan">Create your plan</button>
          </Link>
        }
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
      </div>
    </>
  );
}
