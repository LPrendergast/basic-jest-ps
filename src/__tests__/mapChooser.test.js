import mapChooser from '../mapChooser'

describe('mapChooser', () => {
    it('returns an image based on input given', () => {
        let expected = 'portland.jpg'
        let actual = mapChooser('portland')
        expect(actual).toEqual(expected)
    })

    it('returns an image when no input is given', () => {
        let expected = 'default.jpg'
        let actual = mapChooser('')
        expect(actual).toEqual(expected)
    })
})