import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import pen from "../assets/images/Pen.jpg"
import club from "../assets/images/SerorityClub.jpg"
import snowy from "../assets/images/Snowy.jpg"
import sunsetcolor from "../assets/images/SunsetColor.jpg"
import foggy from "../assets/images/foggy.jpg"
import sunrise from "../assets/images/sunset.jpg"
import teens from "../assets/images/Teens.jpg"
import Trio from "../assets/images/trio.jpg"
import Mustangs from "../assets/images/mustangs.jpg"


export default function HeroSlider() {
  return (

    <AliceCarousel autoPlay autoPlayInterval="2000" autoHeight infinite>
      <img src={teens} className="sliderHeroimg" alt="three horse noses sticking through gate" />
      <img src={snowy} className="sliderHeroimg" alt="Snowy look across bridge toward boarded horses"/>
      <img src={club} className="sliderHeroimg" alt="Horses in shelter while it rains" />
      <img src={sunsetcolor} className="sliderHeroimg" alt="Cloudy Sunset with horses"  />
      <img src={Mustangs} className="sliderHeroimg" alt="Group of mustang horses eating pile of hay"  />
      <img src={foggy} className="sliderHeroimg" alt="Foggy morning looking across the pens of horses"  />
      <img src={pen} className="sliderHeroimg" alt="Horses eating out of hayhut" />
      <img src={sunrise} className="sliderHeroimg" alt="Horses watching sunrise"  />
      <img src={Trio} className="sliderHeroimg" alt="Trio of horses in the morning sun" />
    </AliceCarousel>

  )
};

