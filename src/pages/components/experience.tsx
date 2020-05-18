import React from 'react';
import './experience.sass';

import { FaTools } from 'react-icons/fa';

interface Experience {
  company: string;
  position: string;
  dates: string;
  description: string[];
  technologyUsed: string[];
}

const ExperienceSection = ({ experience }: { experience: Experience }) => {
  return (
    <div>
      <hr></hr>
      <div>
        <div className="flex-row-space-between">
          <span>
            <span className="is-size-6 has-text-weight-bold">{experience.position}</span>
            <span className="is-size-6 has-text-weight-light"> at </span>
            <span className="is-size-6 has-text-weight-semibold">{experience.company}</span>
            <span className="tags">
              {experience.technologyUsed.map((tech) => <span key={tech} className="tag">{tech}</span>)}
            </span>
          </span>
          <span>
            <h3 className="is-size-7">{experience.dates}</h3>
          </span>
        </div>
      </div>
      <div className="experience-description">
        <ul className="is-size-7">
          {experience.description.map((desc) => <li key={desc}>{desc}</li>)}
        </ul>
      </div>
    </div>
  );
};

const Experience = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="card right-card">
      <h1 className="is-size-4 has-text-weight-bold"><div className="icon is-large"><FaTools /></div>Experience</h1>
      {experiences.map((exp) => (<div className="company-section" key={exp.company}>
          <ExperienceSection experience={exp} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
