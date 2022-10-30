/**
 * htsa js - 0.1.0
 * https://codestar.com.ng
 *
 * Copyright 2022 Codestar Technologies
 * Released under AGPL-3.0-or-later
 * https://www.gnu.org/licenses/agpl-3.0.en.html
 */

jQuery( function($) {

    const mobileSidebar = $('[data-htsa-id="mobileSidebar"]');
    const mobileMenu = $('[data-htsa-id="mobileMenu"]');
    const PCMenu = $('[data-htsa-id="headerMenu"]');
    const PCMenuSearchModal = $('[data-htsa-id="searchModal"]');
    const counterUp = window.counterUp.default;
    const statisticsValue = $('[data-htsa-id="statisticsValue"]');
    const semanticUIEmbed = $('[data-htsa-id="semanticUIEmbed"]');
    const frontpageCarouselLeft = $('[data-htsa-id="frontpageCarouselLeft"]');
    const featuredBlogCarousel = $('[data-htsa-id="featuredBlogCarousel"]');
    const semanticUICheckbox = $('[data-htsa-id="semanticUICheckbox"]');
    const contactForm = $('[data-htsa-id="contactForm"]');
    // const asidePostsCarousel = $('aside [data-bs-ride="carousel"]');
    const fixedPCMenuSetter = $('[data-htsa-id="fixedPCMenuSetter"]');

    /***
     * Mobile Sidebar
     */
    if (mobileSidebar.length) {
        mobileSidebar.first().sidebar({
            dimPage: false
        }).sidebar('attach events', '[data-htsa-toggle="mobileSidebar"]');
    }

    /**
     * Mobile Menu
     */
    if (mobileMenu.length) {
        mobileMenu.metisMenu({
            triggerElement: '.htsa-dropdown-link',
            parentTrigger: '.htsa-dropdown-item',
            subMenu: '.htsa-dropdown-menu'
        });
    }

    /**
     * Search Modal
     */
    if (PCMenuSearchModal.length) {
        PCMenuSearchModal.first().modal({
            blurring: true,
            closable: false
        }).modal('attach events', '[data-htsa-toggle="searchModal"]');
    }

    /**
     * Activate Semantic UI Embed
     */
    if (semanticUIEmbed.length) {
        semanticUIEmbed.embed();
    }

    /**
     * Statistics
     */
    if (statisticsValue.length) {
        statisticsValue.each(function () {
            let element = this;
            new Waypoint({
                element: element,
                handler: function (direction) {
                    counterUp(element, {
                        duration: 3000
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view'
            });
        });
    }

    /**
     * Carousel
     */
    if (frontpageCarouselLeft.length) {
        tns({
            container: '[data-htsa-id="frontpageCarouselLeft"]',
            mode: 'gallery',
            items: 1,
            autoplay: true,
            controls: false,
            nav: false,
            autoplayButtonOutput: false
        });
    }

    if (featuredBlogCarousel.length) {
        tns({
            container: '[data-htsa-id="featuredBlogCarousel"]',
            items: 1,
            autoplay: true,
            controls: false,
            autoplayButtonOutput: false
        });
    }

    /**
     * Customize checkbox
     */
    if (semanticUICheckbox.length) {
        semanticUICheckbox.checkbox();
    }

    /**
     * Add validation to contact form widget
     */
    if (contactForm.length) {
        contactForm.form({
            fields: {
                htsaContactFormName: ["empty", "regExp[/^\w+$/gi]"],
                htsaContactFormEmail: ["empty", "regExp[/^\w+$/gi]", "email"],
                htsaContactFormMessage: ["empty", "regExp[/^\w+$/gi]"]
            },
            inline: true
        });
    }

    /**
     * Activate aside bootstrap carousel
     */
    if (asidePostsCarousel.length) {
        // new bootstrap.Carousel(asidePostsCarousel);
    }

    /**
     * Make PC menu fixed when specified target element is within sight
     */
    if (fixedPCMenuSetter.length && PCMenu.length) {
        fixedPCMenuSetter.visibility({
            once: false,
            onBottomPassed: function () {
                PCMenu.addClass('fixed');
            },
            onBottomPassedReverse: function () {
                PCMenu.removeClass('fixed');
            },
        });
    }

} );