/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FaTools } from 'react-icons/fa';
import './skills.sass';

interface Skill {
  name: string
  img: string
  exp: string
}
interface Skills {
  title: string,
  skills: Skill[]
}

const SkillRow = ({ skill }: { skill: Skills }) => {
  return (
    <div className="column is-half-tablet is-one-quarter-desktop">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-centered">
            {skill.title}
          </p>
        </header>
        <div className="card-content">
          <div className="columns is-centered is-vcentered is-desktop is-full is-mobile is-multiline">
            {skill.skills.map((skl) => <div className="column is-mobile is-desktop is-full-desktop is-half-mobile columns mb-1 is-centered is-vcentered is-multiline" key={skl.name}>
              <div className="column is-mobile columns is-centered is-vcentered mb-1">
                <span className="column is-narrow">
                  <figure className="image skill-image">
                    <img src={require(`../../data/skills/${skl.img}`)}></img>
                  </figure>
                </span>
              </div>
              <div className="column is-mobile columns is-full is-centered is-vcentered mb-1 has-text-centered">
                <span className="column is-narrow">
                  <span className="has-text-weight-bold">
                    {skl.name}
                  </span><br />
                  <span className="has-text-semi-bold has-text-grey is-size-7" style={{ whiteSpace: 'nowrap' }}>
                    {skl.exp}
                  </span>
                </span>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = ({ skills }: { skills: Skills[] }) => {
  return (
    <div className="card right-card">
      <h1 className="is-size-4 has-text-weight-bold"><div className="icon is-large"><FaTools /></div>Skills</h1>
      <hr />
      <div className="columns is-multiline">
        {skills && skills.map((skill) => (<SkillRow key={skill.title} skill={skill}></SkillRow>))}
      </div>
    </div>
  );
};
export default Skills;
