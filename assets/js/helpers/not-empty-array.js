module.exports = function (value) {
    return (typeof value === 'object' && value.length !== 0);
}