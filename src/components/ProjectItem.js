import React from 'react';

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

