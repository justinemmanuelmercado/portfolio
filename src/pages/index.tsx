import React from 'react';
import { Helmet } from 'react-helmet';

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
    <Helmet>
      <meta charSet="utf-8" />
      <title>{about.pageTitle}</title>
      <meta id="meta-description" name="description" content={about.description} />
      <meta id="og-title" property="og:title" content={about.title} />
    </Helmet>
    <section className="column is-one-quarter">
      <Side about={about}></Side>
    </section>
    <section className="column is-three-quarters">
      <Skills skills={skills}></Skills>
      <Experience experiences={experience} />
      <Projects projects={projects} />
    </section>
  </div>
);

export default main;
