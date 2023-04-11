export default function Subscribe(props) {
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
    </>
  );
}
