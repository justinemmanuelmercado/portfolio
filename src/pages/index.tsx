import React from 'react';
// @ts-ignore
import about from '../data/about.json';
import './index.sass';
import { Side } from './components/side';

const main = () => (
  <div>
    <Side about={about}></Side>
    <div className="container main">
    </div>
  </div>
);

export default main;
