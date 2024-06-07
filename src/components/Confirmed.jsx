import "./Confirmed.scss";
import verified from "../assets/Verified.svg";
const Confirmed = () => {
  return (
    <section className="confirmed container">
      <div className="img-wrap">
        <img src={verified}/>
      </div>
      <h2>Reservation Confirmed</h2>
      <p className="text">
        <b>Thank You.!</b> You're Reservation is confirmed and an email has been
        sent with reservation details
      </p>
    </section>
  );
};

export default Confirmed;
