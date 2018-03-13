import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Skills from '../components/Skills';

configure({ adapter: new Adapter() });

describe('Skill', () => {
  const skills = shallow(<Skills />);

  it('renders correctly', () => {
    expect(skills).toMatchSnapshot();
  });
});