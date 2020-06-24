const getStatistic = allImages => {

    let biggestSizePicture

    const infoImages = {
        totalImages: allImages.length,
        formats: {},
        biggestPicture: null,
        smallestPicture: null,
        avgSize: null,
        allSize: []
    }

    const counterPictureForFormat = () => {
        allImages.forEach(({
            format
        }) => {
            infoImages.formats[format] ? infoImages.formats[format]++ : (infoImages.formats[format] = 1)
        })
    }

    const searchBiggestPicture = () => {
        let biggestSize = 0
        let biggestPicture

        allImages.forEach(elm => (elm.width * elm.height) > biggestSize && (biggestSize = elm.width * elm.height) && (biggestPicture = elm))
        infoImages.biggestPicture = biggestPicture.url
        biggestSizePicture = biggestSize
    }

    const searchSmallestPicture = () => {
        let smallestSize = biggestSizePicture
        let smallestPicture

        allImages.forEach(elm => (elm.width * elm.height) < smallestSize && (biggestSize = elm.width * elm.height) && (smallestPicture = elm))
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