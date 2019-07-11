import React from 'react';
import { mount } from 'enzyme';
import EventList from '../EventList';

describe('Event List', () => {
  let wrapper:any;

  beforeEach(() => {
    const Props = {
      id: 1,
      title: 'me',
      description: 'for you',
      location: 'lagos'
    }
    wrapper = mount(<EventList {...Props} />);
    })

    it('should find class container', () => {
      const event = wrapper.find('.eventlist__item');
      expect(event.length).toEqual(1);
    })

    it('should interact with the rght props', () => {
      expect(wrapper.props().title).toEqual('me');
    })
})
