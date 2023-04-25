import { useState } from "react";
export default function Dropdown(props) {
  const { coffeeCards, title, handleSelectedItem } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const arrowDirection = (direction) => {
    return direction ? (
      <i className="arrowUp"></i>
    ) : (
      <i className="arrowDown"></i>
    );
  };
  return (
    <>
      <form>
        <div className="optionSection">
          <button
            name="drop1"
            onClick={(event) => {
              setOpen(!open);
              event.preventDefault();
            }}
          >
            <h1>
              {title}
              {arrowDirection(open)}
            </h1>
          </button>
          {open && (
            <div className="optionsContainer" name="set1">
              {coffeeCards.map((element, i) => (
                <button
                  name={element.option}
                  className={`${i === selected ? "selected" : ""} optionCard`}
                  key={i}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSelectedItem(element.option);
                    setSelected(i);
                  }}
                >
                  <h1>{element.option}</h1>
                  <p>{element.summary}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
