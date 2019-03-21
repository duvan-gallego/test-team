import React from 'react';
import { shallow } from 'enzyme';

import Products from '..';

const props = {
  match: {
    params: {
      productCategory: 'Tech'
    }
  }
}

describe('<Products />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<Products { ...props } />);
    expect(wrapper.find('Fragment').length).toBe(1);
  });
  it('Renders an `.products__menu_title`', () => {
    const wrapper = shallow(<Products { ...props } />);
    expect(wrapper.find('.products__menu_title').length).toBe(1);
  });
  it('Renders AppNavbar', () => {
    const wrapper = shallow(<Products { ...props } />);
    expect(wrapper.find('withRouter(ProductsMenuItem)').length).toBe(4);
  });
});


