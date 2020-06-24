const {
    convertArrayToCSV
} = require('convert-array-to-csv');

const getCSV = allImages => {
    const dataCSV = convertArrayToCSV(allImages)
    return dataCSV
}

module.exports = getCSV