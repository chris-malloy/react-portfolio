import React from 'react';
import { Carousel } from 'react-materialize';
import { skillsImages } from '../constants';

const Skills = () => {
  return (
    <div>
      <h5>What I Know</h5>
      <Carousel className="carousel" images={skillsImages.know} />
      <h5>What I am Learning</h5>
      <Carousel images={skillsImages.learning} />
    </div>
  )
}

export default Skills;