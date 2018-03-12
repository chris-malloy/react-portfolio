import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'react-materialize';

const Project = (props) => {

  return (
   <Card className='small'
     header={<CardTitle image={props.image || 'image.png'}>{props.title}</CardTitle>}
     actions={[<a href={props.href}>{props.link}</a>]}>
     {props.description}
  </Card>
 )
};

Project.propTypes= {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;