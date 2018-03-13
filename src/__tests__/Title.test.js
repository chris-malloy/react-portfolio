import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../components/Title';

configure({ adapter: new Adapter() });

describe('Title', () => {
  const title = shallow(<Title />);
  
  it('renders correctly', () => {
    expect(title).toMatchSnapshot();
  })
})