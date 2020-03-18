import React from 'react';
import { shallow } from 'enzyme'
import App from '../App';

describe("App", () => {
  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator')
    expect(locators.length).toBe(1)
  });

  it('renders a header', () => {
    let mountedStoreLocator = shallow(<App />)
    const headers = mountedStoreLocator.find('Header')
    expect(headers.length).toBe(1)
  })

})

