import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from '../components/Projects';

configure({ adapter: new Adapter() });

describe('Projects', () => {
  const projects = shallow(<Projects />);

  it('renders correctly', () => {
    expect(projects).toMatchSnapshot();
  }); 
});