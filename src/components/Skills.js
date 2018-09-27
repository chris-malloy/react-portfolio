import React from 'react';
import { Carousel } from 'react-materialize';
import { skillsImages } from '../constants';

const Skills = () => {
  return (
    <div>
      <h5>DevOps Skills</h5>
      <Carousel className="carousel" images={skillsImages.devOps} />
      <h5>Development SKills</h5>
      <Carousel className="carousel" images={skillsImages.development} />
      <h5>What I am Learning</h5>
      <Carousel images={skillsImages.learning} />
    </div>
  )
}

export default Skills;