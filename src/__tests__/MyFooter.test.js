import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyFooter from '../components/MyFooter';

configure({ adapter: new Adapter() });

describe('MyFooter', () => {
  const myFooter = shallow(<MyFooter />);

  it('renders correctly', () => {
    expect(myFooter).toMatchSnapshot();
  });
});