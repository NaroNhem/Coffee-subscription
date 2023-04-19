import { Link } from "react-router-dom";
export default function AboutUs(props) {
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
      <div className="aboutUsBoard">
        <img
          src="assets/about/desktop/image-hero-whitecup.jpg"
          alt="whitecup"
          className="whiteCupImg"
        ></img>
        <div className="aboutInfo">
          <h1>About Us</h1>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
      <section className="commitment">
        <img
          src="assets/about/desktop/image-commitment.jpg"
          alt="commitment"
          className="imgCommitment"
        />
        <div className="statement">
          <h1>Our commitment</h1>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className="quality">
        <div className="qualityStatement">
          <h1>Uncompromising quality</h1>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <img src="assets/about/desktop/abc.jpg" alt="latte" className="latte" />
      </section>
      <section className="ourHQ">
        <h1>Our headquarters</h1>
        <ul>
          <li className="locationCard">
            <img src="assets/about/desktop/illustration-uk.svg" alt="uk" />
            <h1>United Kingdom</h1>
            <p>
              68 Asfordby Rd <br></br> Alcaston <br></br> SY6 1YA <br></br>+44
              1241 918425
            </p>
          </li>
          <li className="locationCard">
            <img
              src="assets/about/desktop/illustration-canada.svg"
              alt="canada"
            />
            <h1>Canada</h1>
            <p>
              1528 Eglinton Avenue<br></br> Toronto <br></br>Ontario M4P 1A6{" "}
              <br></br> +1 416 485 2997
            </p>
          </li>
          <li className="locationCard">
            <img
              src="assets/about/desktop/illustration-australia.svg"
              alt="australia"
            />
            <h1>Australia</h1>
            <p>
              36 Swanston Street<br></br> Kewell <br></br>Victoria <br></br>+61
              4 9928 3629
            </p>
          </li>
        </ul>
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
            <li className="footerLinks">{props.home}</li>
            <li className="footerLinks">{props.about}</li>
            <li className="footerLinks">{props.subscribe}</li>
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
