import "./styling/about.css";
export const About = ({ name, position, description }) => {
  return (
    <>
      <div className="About-div">
        <div className="About-top">
          <h1>{name}</h1>
          <span>{position}</span>
          <p>{description}</p>
        </div>
        <div className="About-bottom">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
        </div>
      </div>
    </>
  );
};
