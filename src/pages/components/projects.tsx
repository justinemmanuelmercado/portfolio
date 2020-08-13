/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import './projects.sass';

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
        <div>
          <span>
            <span className="is-size-6 has-text-weight-bold">{project.title}</span>
            <span className="tags">
              {project.technologyUsed.map((tech) => <span key={tech} className="tag">{tech}</span>)}
            </span>
          </span>
        </div>
        <div className="experience-description">
          <div className="columns">
            <div className="column is-one-half">
              <img src={require(`../../gif/${project.gif}.gif`)} />
            </div>
            <div className="column">
              <ul className="is-size-7">
                <li>{project.description}</li>
              </ul>
              <div className="field is-grouped button-links">
                <span className="control">
                  <button className="button">
                    <a href={project.url}>Visit Page</a>
                  </button>
                </span>
                <span className="control">
                  <button className="button">
                    <a href={project.gitUrl}>Git Link</a>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
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
