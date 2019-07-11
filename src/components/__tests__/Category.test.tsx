import React from 'react';
import { shallow } from 'enzyme';
import Category from '../Category';

describe('Category Component', () => {
  let wrapper:any
  beforeEach(() => {
    const Props = {
      image: 'string'
    }
    wrapper = shallow(<Category {...Props} />);
  })

  it('should render Category without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should find Category class', () => {
      const category = wrapper.find('.category__list--item')
      expect(category.length).toEqual(1);
      });

  it('should find category image', () => {
      const image = wrapper.find('img');
      expect(image.length).toEqual(1);
      })
})
