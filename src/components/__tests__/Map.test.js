import React from 'react'
import { shallow } from 'enzyme'
import Map from '../Map'

describe('Map', () => {
    let mountedMap;
    beforeEach(() => {
        mountedMap = shallow(<Map />)
    })
    it('renders without crashing', () => {
        let mountedMap = shallow(<Map />)
    })

    it('contains a map image', () => {
        const img = mountedMap.find('img')
        expect(img.length).toBe(1)
    })

    it('displays the none map when no params', () => {
        const defaultMap = mountedMap.find('img [src="images/image1.jpeg"]')
        expect(defaultMap.length).toBe(1)
    })
})

