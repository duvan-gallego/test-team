import React from 'react';
import { shallow } from 'enzyme';

import Home from '..';

describe('<Home />', () => {
  it('Render Home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('Renders an `.global__empty_page`', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.global__empty_page').length).toBe(1);
  });
  it('Test text', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.text()).toBe('Home');
  });
});
