/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import Gif from './gif';
import './gif.sass';

interface Project {
  title: string;
  description: string[];
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
        <div className="mt-4 is-fullwidth">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <Gif
                gif={require(`../../data/projects/${project.gif}.gif`)}
                still={require(`../../data/projects/${project.gif}.png`)}/>
            </div>
            <div className="column is-two-thirds">
              <ul className="is-size-7">
                {project.description.map((desc) => <li key={desc}>{desc}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped mt-4">
        {project.url && <span className="control">
          <button className="button">
            <a href={project.url}>See it in action</a>
          </button>
        </span>}
        {project.gitUrl && <span className="control">
          <button className="button">
            <a href={project.gitUrl}>Open git page</a>
          </button>
        </span>}
      </div>
    </div>
  );
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="card right-card">
      <h1 className="is-size-4 has-text-weight-bold"><div className="icon is-large"><FaLightbulb /></div>Personal Projects</h1>
      {projects && projects.map((prj) => <ProjectSection key={prj.title} project={prj} />)}
    </div>
  );
};

export default Projects;
