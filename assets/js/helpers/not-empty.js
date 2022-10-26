module.exports = function (value) {
    return (typeof value === 'string' && value !== '' && value !== null);
}