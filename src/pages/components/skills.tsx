import React from 'react';
import { FaTools } from 'react-icons/fa';

interface Skill {
  title: string,
  skills: string[]
}

const SkillRow = ({ skill }: { skill: Skill }) => {
  return (
    <span className="flex-row">
      <span className="column is-one-fifth is-size-6 has-text-weight-bold flex-justify-end">
        {skill.title}
      </span>
      <span className="column is-four-fifths is-size-5 has-text-weight-light">
        <span className="tags">
          {skill.skills.map((skl) => <span className="tag" key={skl}>{skl}</span>)}
        </span>
      </span>
    </span>
  );
};

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="card right-card">
      <h1 className="is-size-4 has-text-weight-bold"><div className="icon is-large"><FaTools /></div>Skills</h1>
      <hr />
      {skills && skills.map((skill) => (<SkillRow key={skill.title} skill={skill}></SkillRow>))}
    </div>
  );
};
export default Skills;
