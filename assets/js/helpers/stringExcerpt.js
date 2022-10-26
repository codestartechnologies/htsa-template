module.exports = function (value) {
    let max, limit;
    max = 220;
    limit = 200;
    return (typeof value === 'string' && value.length > max) ? value.substring(0, limit) + '...' : value;
}