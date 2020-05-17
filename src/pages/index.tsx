import React from 'react';

import about from '../data/about.json';
import experience from '../data/experience.json';
import skills from '../data/skills.json'
import './index.sass';

import { Side } from './components/side';
import { Experience } from './components/experience';
import { Skills } from './components/skills';

const main = () => (
  <div className="container columns is-fluid">
    <section className="column is-one-quarter">
      <Side about={about}></Side>
    </section>
    <section className="column is-three-quarters">
      <Experience experiences={experience}/>
      <Skills skills={skills}></Skills>
    </section>
  </div>
);

export default main;
