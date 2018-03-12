import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Project from '../components/Project';

configure({ adapter: new Adapter() });

describe('Project', () => {
  const props = {
    title: 'title',
    href: 'href',
    link: 'link',
    description: 'description'
  }
  const project = shallow(<Project {...props} />)
  it('renders correctly', () => {
    expect(project).toMatchSnapshot();
  });
});