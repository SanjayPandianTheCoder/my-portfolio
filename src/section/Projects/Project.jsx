import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from "../../common/Heading";
import Dragon from "../../assets/dragon.png";
import Weather from "../../assets/weather.png";
import Movie from "../../assets/movie.png";
import Gender from "../../assets/gender.png";
import Styles from "./ProjectStyles.module.css";
import "../../App.css";

function Project() {
  return (
    <>
      <section className={Styles.maincontainer}>
        <Heading content="Projects" className={Styles.heading} />
        <div className={Styles.container}>
          <ProjectCard img={Dragon} content="Role Playing Game" />
          <ProjectCard img={Weather} content="Weather App" />
          <ProjectCard img={Movie} content="Movie Search App" />
          <ProjectCard img={Gender} content="Gender Prediction" />
        </div>
      </section>
    </>
  );
}

export default Project;
