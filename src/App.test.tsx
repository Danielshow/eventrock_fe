import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App Component', () => {
    let app:any
    beforeEach(() => {
      app = shallow(<App />)
        });

  it('should find routes', () => {
    const wrapper = app.find('Route');
    expect(wrapper.length).toEqual(1)
        })
})
