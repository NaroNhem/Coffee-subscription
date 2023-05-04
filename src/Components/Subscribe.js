import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

export default function Subscribe(props) {
  const [coffeeLike, setCoffeeLike] = useState(null);
  const [coffeeType, setCoffeeType] = useState(null);
  const [coffeeQuantity, setCoffeeQuantity] = useState(null);
  const [coffeeGrind, setCoffeeGrind] = useState(null);
  const [coffeeDeliver, setCoffeeDeliver] = useState(null);
  const [count, setCount] = useState(1);
  const [modalState, setModalState] = useState(false);

  const handleCoffeeLike = (like) => {
    setCoffeeLike(like);
    checkNull();
  };

  const handleCoffeeType = (type) => {
    setCoffeeType(type);
    checkNull();
  };

  const handleCoffeeQuantity = (quantity) => {
    setCoffeeQuantity(quantity);
    checkNull();
  };

  const handleCoffeeGrind = (grind) => {
    setCoffeeGrind(grind);
    checkNull();
  };

  const handleCoffeeDeliver = (deliver) => {
    setCoffeeDeliver(deliver);
    checkNull();
  };

  const checkList = [
    coffeeLike,
    coffeeType,
    coffeeQuantity,
    coffeeGrind,
    coffeeDeliver,
  ];

  const checkNull = () => {
    checkList.map((element) => (element == null ? null : setCount(count + 1)));
    count == 5 && setCount(5);
  };

  const modal = (e) => {
    setModalState(true);
    document.body.style.backgroundColor = "rgba(0,0,0,0.75)";
  };

  const closeModal = () => {
    setModalState(false);
    document.body.style.backgroundColor = "white";
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
        <div>
          <Dropdown
            coffeeCards={coffeeCards1}
            title={"How do you like your coffee?"}
            handleSelectedItem={handleCoffeeLike}
          />
          <Dropdown
            coffeeCards={coffeeCards2}
            title={"What type of coffee?"}
            handleSelectedItem={handleCoffeeType}
          />
          <Dropdown
            coffeeCards={coffeeCards3}
            title={"How much would you like?"}
            handleSelectedItem={handleCoffeeGrind}
          />
          <Dropdown
            coffeeCards={coffeeCards4}
            title={"Want us to grind them?"}
            handleSelectedItem={handleCoffeeQuantity}
          />
          <Dropdown
            coffeeCards={coffeeCards5}
            title={"How often should we deliver?"}
            handleSelectedItem={handleCoffeeDeliver}
          />
          <div className="orderSummary">
            <p>ORDER SUMMARY</p>
            <h1 className="order">
              "I drink my coffee as{" "}
              {coffeeLike === null ? (
                <span>_____</span>
              ) : (
                <span>{coffeeLike}</span>
              )}
              , with a&nbsp;
              {coffeeType === null ? (
                <span>_____</span>
              ) : (
                <span>{coffeeType}</span>
              )}
              &nbsp;type of bean.&nbsp;
              {coffeeGrind === null ? (
                <span>_____</span>
              ) : (
                <span>{coffeeGrind}</span>
              )}
              &nbsp;ground ala{" "}
              {coffeeQuantity === null ? (
                <span>_____</span>
              ) : (
                <span>{coffeeQuantity}</span>
              )}
              , sent to me{" "}
              {coffeeDeliver === null ? (
                <span>_____</span>
              ) : (
                <span>{coffeeDeliver}</span>
              )}
              ."
            </h1>
          </div>
          <div className="buttonContainer">
            <button
              className={`${count == 5 ? "createOrder" : ""} notReady`}
              onClick={modal}
            >
              Create my plan!
            </button>
          </div>
          {modalState == true && (
            <Modal
              like={coffeeLike}
              type={coffeeType}
              quantity={coffeeQuantity}
              grind={coffeeGrind}
              deliver={coffeeDeliver}
              close={closeModal}
            />
          )}
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
const coffeeCards1 = [
  {
    option: "Capsule",
    summary: "Compatible with Nespresso systems and similar brewers",
  },
  {
    option: "Filter",
    summary: "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    option: "Espresso",
    summary:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];

const coffeeCards2 = [
  {
    option: "Single Origin",
    summary:
      "Distinct, high quality coffee from a specific family-owned farme with Nespresso systems and similar brewers",
  },
  {
    option: "Decaf",
    summary: "Just like regular coffee, except the caffeine has been removed",
  },
  {
    option: "Blended",
    summary:
      "Combination of two or three dark roasted beans of organic coffees",
  },
];

const coffeeCards3 = [
  {
    option: "250g",
    summary: "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    option: "500g",
    summary: "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    option: "1000g",
    summary: "Perfect for offices and events. Yields about 90 delightful cups.",
  },
];

const coffeeCards4 = [
  {
    option: "Wholebean",
    summary: "Best choice if you cherish the full sensory experience",
  },
  {
    option: "Filter",
    summary: "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    option: "Cafetiére",
    summary: "Course ground beans specially suited for french press coffee",
  },
];

const coffeeCards5 = [
  {
    option: "Every week",
    summary: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    option: "Every 2 weeks",
    summary: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    option: "Every month",
    summary: "$12.00 per shipment. Includes free priority shipping.",
  },
];
