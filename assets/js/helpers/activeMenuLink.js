module.exports = function (active) {
    return (typeof active !== undefined && active === true) ? 'active' : '';
}