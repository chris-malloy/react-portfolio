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
    it('contains a `Title` component', () => {
      expect(app.find('Title').exists()).toBe(true);
    });

    it('contains a `MyNavbar` component', () => {
      expect(app.find('MyNavbar').exists()).toBe(true);
    });

    it('contains a `Header` component', () => {
      expect(app.find('Header').exists()).toBe(true);
    });

    it('contains a `Projects` component', () => {
      expect(app.find('Projects').exists()).toBe(true);
    });

    it('contains a `Skills` component', () => {
      expect(app.find('Skills').exists()).toBe(true);
    });

    it('contains a `MyFooter` component', () => {
      expect(app.find('MyFooter').exists()).toBe(true);
    })
  });
});
