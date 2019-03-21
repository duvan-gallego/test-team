import React from 'react';
import { shallow } from 'enzyme';

import Clients from '..';

describe('<Clients />', () => {
  it('Render clients page', () => {
    const wrapper = shallow(<Clients />);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('Renders an `.global__empty_page`', () => {
    const wrapper = shallow(<Clients />);
    expect(wrapper.find('.global__empty_page').length).toBe(1);
  });
  it('Test text', () => {
    const wrapper = shallow(<Clients />);
    expect(wrapper.text()).toBe('Clients');
  });
});
