import React from 'react';
import { projectArray } from '../constants';
import Project from './Project';
import { Row } from 'react-materialize';

const Projects = () => {
  const projectList = projectArray.map((p, i) => {
    return <Project key={i} title={p.title} href={p.href} href2={p.href2} link={p.link} link2={p.link2} description={p.description} image={p.image} />
  });
  return (
      <Row>
        {projectList}
      </Row>
    )
  };
  
export default Projects;