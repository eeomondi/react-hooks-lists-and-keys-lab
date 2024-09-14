import React from 'react';
import ProjectItem from './ProjectItem'; // Adjust the import path as necessary

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;

