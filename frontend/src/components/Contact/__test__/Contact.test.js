import React from 'react';
import { shallow } from 'enzyme';

import Contact from '..';

describe('<Contact />', () => {
  it('Render Contact page', () => {
    const wrapper = shallow(<Contact />);
    console.log(wrapper.debug());
    expect(wrapper.find('Connect(ContactForm)').length).toBe(1);
  });
  it('Renders an `.contact`', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('.contact').length).toBe(1);
  });
});
