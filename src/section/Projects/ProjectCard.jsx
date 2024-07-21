import React from "react";
import Styles from "./ProjectStyles.module.css";

function ProjectCard(props) {
  return (
    <div className={Styles.projectcardContainer}>
      <a href="https://github.com/sanjaypandianthecoder" target="_blank">
        <img src={props.img} alt={props.content} />
        <p>{props.content}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
