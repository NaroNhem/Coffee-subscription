export default function Home() {
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
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CREATE YOUR PLAN</li>
          </ul>
        </menu>
      </header>
      <div className="heroContainer">
        <img
          src="assets/home/desktop/image-hero-coffeepress.jpg"
          className="heroImg"
        ></img>
        <div className="heroInfo">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="createPlan">Create your plan</button>
        </div>
      </div>
    </>
  );
}
