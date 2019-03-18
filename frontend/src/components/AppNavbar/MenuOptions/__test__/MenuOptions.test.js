import React from 'react';
import { shallow  } from 'enzyme';

import MenuOptions from '..';

describe('<MenuOptions />', () => {
  it('renders menu options', () => {
    const wrapper = shallow(<MenuOptions />);
    const links = wrapper.find('Link');

    expect(links.length).toBe(4);
  });
});