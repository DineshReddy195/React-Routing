import NavBar from "../Components/Nav";
import projects from ".././Assets/Products.jpg";
const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="left">
          <h1 className="heading">I am Projects</h1>

          <button className="company-button">Company Profile </button>
        </div>
        <div className="right">
          <img src={projects} className="backdrop" />
        </div>
      </div>
    </div>
  );
};
export default Projects;