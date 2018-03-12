import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'react-materialize';

const Project = (props) => {

  return (
    <div >
      <Card className='small black-text '
        header={<CardTitle image={props.image || 'image.png'}>{props.title}</CardTitle>}
        key={1}
        actions={[<a key={props.title} href={props.href}>{props.link}</a>]}>
        {props.description}
      </Card>
    </div>
 )
};

Project.propTypes= {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;