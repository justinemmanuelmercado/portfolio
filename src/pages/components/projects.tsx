/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologyUsed: string[];
  url: string;
  gitUrl: string;
  gif: string;
}

const ProjectSection = ({ project }: { project: Project }) => {
  return (
    <div>
      <hr></hr>
      <div>
        <img src={require(`../../gif/${project.gif}.gif`)}/>
        <div className="flex-row-space-between">
          <span>
            <span className="is-size-6 has-text-weight-bold">{project.title}</span>
            <span className="tags">
              {project.technologyUsed.map((tech) => <span key={tech} className="tag">{tech}</span>)}
            </span>
          </span>
          <span>
            <h3 className="is-size-7">{project.url}</h3>
          </span>
        </div>
      </div>
      <div className="experience-description">
        <ul className="is-size-7">
          <li>{project.description}</li>
        </ul>
      </div>
    </div>
  );
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="card right-card">
      <h1 className="is-size-4 has-text-weight-bold"><div className="icon is-large"><FaLightbulb /></div>Personal Projects</h1>
      {projects.map((prj) => <ProjectSection key={prj.title} project={prj} />)}
    </div>
  );
};

export default Projects;
