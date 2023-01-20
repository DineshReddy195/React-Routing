import NavBar from "../Components/Nav";
import backdrop from ".././Assets/backdrop.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="left">
          <h1 className="heading">
            Leading MEP & Facility management company in Dubai
          </h1>
          <p className="desc">
            Urban Science is always ready to accept your challenges Meeting your
            goals is our main objective. Professional services for facility
            management & MEP works.
          </p>
          <button className="company-button">Company Profile </button>
        </div>
        <div className="right">
          <img src={backdrop} className="backdrop" />
        </div>
      </div>
    </div>
  );
};
export default Home;