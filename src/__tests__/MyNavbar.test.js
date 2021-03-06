import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyNavbar from '../components/MyNavbar';

configure({ adapter: new Adapter() });

describe('MyNavbar', () => {
  const myNavbar = shallow(<MyNavbar />);

  it('renders correctly', () => {
    expect(myNavbar).toMatchSnapshot();
  });

  
});