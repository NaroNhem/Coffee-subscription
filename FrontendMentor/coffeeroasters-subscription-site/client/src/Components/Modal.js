export default function Modal(props) {
  const { like, type, quantity, grind, deliver, ref } = props;

  return (
    <div className="modal" ref={ref}>
      <h1>Order Summary</h1>
      <div className="finalSummary">
        <p>
          “I drink my coffee as <span>{like}</span>, with a <span>{type}</span>{" "}
          type of bean. <span>{quantity}</span> ground ala &nbsp;
          <span>{grind}</span>, sent to me <span>{deliver}</span>.”
        </p>
        <p id="finePrint">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <div className="confirm">
          <p>$14.00/ mo</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
