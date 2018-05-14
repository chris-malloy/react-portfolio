import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle } from 'react-materialize';

const Project = (props) => {
  const actions = 
  [
    <a key={1} href={props.href}>{props.link}</a>,
    <a key={2} href={props.href2}>{props.link2}</a>
  ];

  return (
    <Col m={6} s={12}>
      <Card 
        className="small"
        header={<CardTitle image={props.image || "image.png"}>{props.title}</CardTitle>}
        actions={actions}>
        {props.description}
      </Card>
    </Col>
 )
};

Project.propTypes= {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  href2: PropTypes.string,
  link: PropTypes.string.isRequired,
  link2: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default Project;