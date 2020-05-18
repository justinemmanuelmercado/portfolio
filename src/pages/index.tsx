import React from 'react';

import about from '../data/about.json';
import experience from '../data/experience.json';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import './index.sass';

import Side from './components/side';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';

const main = () => (
  <div className="container columns is-fluid">
    <section className="column is-one-quarter">
      <Side about={about}></Side>
    </section>
    <section className="column is-three-quarters">
      <Experience experiences={experience}/>
      <Projects projects={projects}/>
      <Skills skills={skills}></Skills>
    </section>
  </div>
);

export default main;
