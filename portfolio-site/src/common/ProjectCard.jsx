import React from "react";

function ProjectCard(props) {
  return (
    <a href={props.link} target="_blank">
      <img className="hover" src={props.src} alt={`${props.title} logo`} />
      <h3>{props.title}</h3>
      <p>{props.descrip}</p>
    </a>
  );
}

export default ProjectCard;
