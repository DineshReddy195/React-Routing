import NavBar from "../Components/Nav";
import contactus from ".././Assets/Contactus.jpg";
const Contactus = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="left">
          <h1 className="heading">I am Contact Us</h1>

          <button className="company-button">Company Profile </button>
        </div>
        <div className="right">
          <img src={contactus} className="backdrop" />
        </div>
      </div>
    </div>
  );
};
export default Contactus;