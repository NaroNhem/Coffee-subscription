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
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.subscribe}</li>
          </ul>
        </menu>
      </header>
      <div className="aboutUsBoard">
        <img
          src="assets/about/desktop/image-hero-whitecup.jpg"
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
        <h1>Our commitment</h1>
      </section>
    </>
  );
}
