import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const Gif = ({ gif, still }: {gif: string, still: string}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="gif-holder">
      {!playing && <div className="play-pause" onClick={() => setPlaying(true)}>
        <FaPlayCircle size="5rem"/>
      </div>}
      <img className={`gif-still ${playing ? 'playing' : ''}`}loading="lazy" src={still}/>
      <img className={'gif-gif'} onClick={() => setPlaying(false)} loading="lazy" src={playing ? gif : still} />
    </div>
  );
};

export default Gif;
