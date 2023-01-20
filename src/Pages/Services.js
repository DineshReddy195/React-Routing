import NavBar from "../Components/Nav";
import services from ".././Assets/Services.jpg";
const Services = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="left">
          <h1 className="heading">I am Services</h1>

          <button className="company-button">Company Profile </button>
        </div>
        <div className="right">
          <img src={services} className="backdrop" />
        </div>
      </div>
    </div>
  );
};
export default Services;