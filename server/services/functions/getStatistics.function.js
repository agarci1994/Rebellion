const getStatistic = allImages => {

// Variable
    let biggestSizePicture
    let smallestSizePicture

 // Format   
    const infoImages = {
        totalImages: allImages.length,
        formats: {},
        biggestPicture: null,
        smallestPicture: null,
        avgSize: null,
        allSize: []
    }


// Functions
    const counterPictureForFormat = () => {
        allImages.forEach(({
            format
        }) => {
            infoImages.formats[format] ? infoImages.formats[format]++ : (infoImages.formats[format] = 1)
        })
    }

    const searchBiggestPicture = () => {
        biggestSizePicture = 0
        let biggestPicture

        allImages.forEach(elm => (elm.width * elm.height) > biggestSizePicture && (biggestSizePicture = elm.width * elm.height) && (biggestPicture = elm))
        infoImages.biggestPicture = biggestPicture.url
    }

    const searchSmallestPicture = () => {
        smallestSizePicture = biggestSizePicture
        let smallestPicture

        allImages.forEach(elm => (elm.width * elm.height) < smallestSizePicture && (biggestSizePicture = elm.width * elm.height) && (smallestPicture = elm))
        infoImages.smallestPicture = smallestPicture.url
    }

    const getAverageSize = () => {
        const average = allImages.reduce((acc, item) => acc += item.bytes, 0)
        infoImages.avgSize = average
    }

    const getAllSize = () => {
        const allSize = allImages.map(elm => elm.bytes)
        infoImages.allSize = allSize
    }

    counterPictureForFormat()
    searchBiggestPicture()
    searchSmallestPicture()
    getAverageSize()
    getAllSize()

    return infoImages
}

module.exports = getStatistic