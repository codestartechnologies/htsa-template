module.exports = function (url, menuType) {
    let activeURL;

    switch (menuType) {
        case "mobilemenu":
            activeURL = document.querySelector('[data-htsa-id="mobileMenu"]').getAttribute('data-htsa-active-link');
            break;
        case "pcmenu":
            activeURL = document.querySelector('[data-htsa-id="pcMenuRight"]').getAttribute('data-htsa-active-link');
            break;
        default:
            break;
    }
    return (typeof activeURL !== undefined && activeURL === url) ? 'active' : '';
}