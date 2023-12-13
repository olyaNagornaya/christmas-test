import React from 'react';
import type { FC } from 'react';
import s from './Hero.module.scss';

const Hero: FC = () => {
  return (
      <div>
          <video autoPlay
                 loop
                 playsInline
                 muted
                 preload="auto"
                 src="/video/christmas.mp4"
                 className={s.video}
          />
      </div>
  );
};

export default Hero;