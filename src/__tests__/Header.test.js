import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  const header = shallow(<Header />);
  
  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  })
})