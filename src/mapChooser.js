import React from 'react'

const mapChooser = (locationName) => {
    if (!locationName) locationName = 'default'

    let imageName = `${locationName}.jpg`

    return imageName
}

export default mapChooser