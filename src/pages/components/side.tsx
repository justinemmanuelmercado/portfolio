/* eslint-disable global-require */
import React from 'react';
import './side.sass';
import {
  FaEnvelope, FaGithub, FaLinkedin, FaGlobeAsia, FaEdit,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib/cjs';

interface AboutLink {
  display: string;
  url: string;
}
interface About {
  firstName: string;
  lastName: string;
  address: string;
  title: string;
  email: AboutLink;
  linkedin: AboutLink;
  github: AboutLink;
  blog: AboutLink;
}

const SideLink = ({ link, Icon }: { link: AboutLink, Icon: IconType }) => {
  return (
    <span>
      <a href={link.url}>
        <span className="icon has-text-info">
          <Icon />
        </span>
        {link.display}
      </a>
    </span>
  );
};

const Side = ({ about }: { about: About }) => {
  return about ? (
    <div className="card side">
      <div className="columns flex-direction-column">
        <div className="column center-items-through-flex ">
          <img src={require('../../data/me.jpg')} className="display-picture" alt={`${about.firstName} ${about.lastName}`}></img>
        </div>
        <span className="column center-items-through-flex flex-direction-column">
          <h1 className="is-size-4 has-text-centered">{about.firstName} <span className="has-text-weight-bold">{about.lastName}</span></h1>
          <h2 className="is-size-6 has-text-centered has-text-grey-light has-text-semi-bold">{about.title}</h2>
        </span>
        <hr></hr>
        <span className="column columns flex-direction-column">
          <span className="column">
            <span className="icon has-text-info">
              <FaGlobeAsia />
            </span>

            {about.address}
          </span>
          <div className="column">
            <SideLink link={about.email} Icon={FaEnvelope} />
          </div>
          <div className="column">
            <SideLink link={about.blog} Icon={FaEdit} />
          </div>
          <div className="column">
            <SideLink link={about.github} Icon={FaGithub} />
          </div>
          <div className="column">
            <SideLink link={about.linkedin} Icon={FaLinkedin} />
          </div>
        </span>
      </div>
    </div>
  ) : <div></div>;
};

export default Side;
