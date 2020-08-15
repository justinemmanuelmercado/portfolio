import React, { useState } from 'react';
import { FaPlayCircle, FaSpinner } from 'react-icons/fa';

const Gif = ({ gif, still }: {gif: string, still: string}) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="gif-holder">
      {!playing && <div className="play-pause" onClick={() => setPlaying(true)}>
        <FaPlayCircle size="5rem"/>
      </div>}
      {loading && <div className="play-pause" onClick={() => setPlaying(true)}>
        <FaSpinner size="5rem"/>
      </div>}
      <img className={`gif-still ${playing ? 'playing' : ''}`}loading="eager" src={still}/>
      <link rel="preload" href={gif} as="image"/>
      <img onLoad={() => setLoading(false)} className={'gif-gif'} onClick={() => setPlaying(false)} loading="lazy" src={playing ? gif : still} />
    </div>
  );
};

export default Gif;
