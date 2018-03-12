import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
  describe('my components', () => {

    it('contains a `MyNavbar` component', () => {
      expect(app.find('MyNavbar').exists()).toBe(true);
    });

    it('contains a `Header` component', () => {
      expect(app.find('Header').exists()).toBe(true);
    });

    it('contains a `Project` component', () => {
      expect(app.find('Project').exists()).toBe(true);
    });
  });
});
