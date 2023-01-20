import NavBar from "../Components/Nav";
import aboutus from ".././Assets/Aboutus.jpg";
const Aboutus = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="left">
          <h1 className="heading">I am About Us</h1>

          <button className="company-button">Company Profile </button>
        </div>
        <div className="right">
          <img src={aboutus} className="backdrop" />
        </div>
      </div>
    </div>
  );
};
export default Aboutus;