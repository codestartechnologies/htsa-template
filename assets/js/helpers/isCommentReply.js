module.exports = function (value) {
    return (typeof value === 'number' && value === 0) ? false : true;
}