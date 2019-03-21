import React from 'react';
import { shallow } from 'enzyme';

import AppNavbar from '..';

describe('<AppNavbar />', () => {
  it('Renders AppNavbar', () => {
    const wrapper = shallow(<AppNavbar />);
    expect(wrapper.find('withRouter(MenuOptions)').length).toBe(1);
  });
  it('Renders a `.appNavBar"`', () => {
    const wrapper = shallow(<AppNavbar />);
    expect(wrapper.find('.appNavBar').length).toBe(1);
  });
});