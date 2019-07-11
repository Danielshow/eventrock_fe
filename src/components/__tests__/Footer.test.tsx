import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe('Footer Component', () => {
  let wrapper:any;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  })

  it('should mount footer component', () => {
     expect(wrapper).toBeTruthy()
  })

  it('should shouyld find footer class', () => {
     const footer = wrapper.find('.footer');
     expect(footer.length).toEqual(1);
  })
})
