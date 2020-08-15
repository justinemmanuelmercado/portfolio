import React, { useState } from 'react';
import { FaPlayCircle, FaSpinner } from 'react-icons/fa';

const Gif = ({ gif, still }: {gif: string, still: string}) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="gif-holder">
      {!playing && <div className="play-pause" onClick={() => {
        setLoading(true);
        setPlaying(true);
      }}>
        <FaPlayCircle size="5rem"/>
      </div>}
      {loading && <div className="play-pause" onClick={() => setPlaying(true)}>
        <FaSpinner className="fa-spin" size="2rem"/>
      </div>}
      <img
        onLoad={() => setLoading(false)}
        className={'gif-gif'}
        onClick={() => setPlaying(false)}
        loading="lazy"
        src={playing ? gif : still} />
    </div>
  );
};

export default Gif;
