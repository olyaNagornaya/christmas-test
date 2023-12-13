import React from 'react';
import type { FC } from 'react';
import s from './Hero.module.scss';
import {useLocation} from "react-router-dom";

const Hero: FC = () => {
   const videoUrl = window.location.href.includes('github.io')
       ? "/christmas-test/video/christmas.mp4"
       : "/video/christmas.mp4";

  return (
      <div>
          <video autoPlay
                 loop
                 playsInline
                 muted
                 preload="auto"
                 src={videoUrl}
                 className={s.video}
          />
      </div>
  );
};

export default Hero;