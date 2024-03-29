/**
 * htsa.js
 * https://github.com/codestartechnologies/htsa-template
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
    const frontpageReviewsCarousel = $('[data-htsa-id="featuredReviews"]');
    const featuredBlogCarousel = $('[data-htsa-id="featuredBlogCarousel"]');
    const semanticUICheckbox = $('[data-htsa-id="semanticUICheckbox"]');
    const contactForm = $('[data-htsa-id="contactForm"], form#contactform');
    const commentForm = $('[data-htsa-id="commentForm"], form#commentform');
    const newsletterForm = $('[data-htsa-id="newsletterForm"]');
    const scrollUpButton = $('[data-htsa-id="scrollToTop"]');
    const footer = $('footer');

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
            // mode: 'gallery',
            speed: 700,
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

    if (frontpageReviewsCarousel.length) {
        tns({
            container: '[data-htsa-id="featuredReviews"]',
            items: 1,
            gutter: 24,
            // edgePadding: 10,
            autoplay: true,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            responsive: {
                "768": {
                    items: 2
                },
                "991": {
                    items: 3
                },
                "1400": {
                    items: 4
                }
            }
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
                htsaContactFormName: ["empty", "maxLength[100]"],
                htsaContactFormEmail: ["empty", "email", "maxLength[100]"],
                htsaContactFormMessage: ["empty", "maxLength[2000]"]
            },
            inline: true
        });
    }

    /**
     * Add validation to comment form widget
     */
    if (commentForm.length) {
        commentForm.form({
            fields: {
                htsaCommentFormName: ["empty", "maxLength[100]"],
                htsaCommentFormEmail: ["empty", "email", "maxLength[100]"],
                htsaCommentFormWebsite: ["empty", "maxLength[100]"],
                htsaCommentFormComment: ["empty", "maxLength[800]"]
            },
            inline: true
        });
    }

    /**
     * Add validation to newsletter form widget
     */
    if (newsletterForm.length) {
        newsletterForm.form({
            fields: {
                htsaNewsletterFormName: ["empty", "maxLength[100]"],
                htsaNewsletterFormEmail: ["empty", "email", "maxLength[100]"],
            },
            inline: true
        });
    }

    /**
     * Activate scroll to top button
     */
    if (scrollUpButton.length) {
        $.scrollUp({
            scrollFrom: 'bottom',
            scrollTrigger: scrollUpButton
        });
    }

    /**
     * Show scroll to top button when user navigate to footer
     */
    if (footer.length && scrollUpButton.length) {
        footer.visibility({
            once: false,
            onTopVisible: function () {
                scrollUpButton.fadeIn();
            },
            onTopVisibleReverse: function () {
                scrollUpButton.fadeOut();
            },
        });
    }

    /**
     * Enable rating
     */
    if ( $('.ui.rating').length ) {
        $('.ui.rating').rating({
            clearable: false,
            interactive: false
        });
    }

} );

jQuery( window ).on( 'load', function () {

    const preloader = jQuery('[data-htsa-id="preloader"]');

    /**
     * Preloader
     */
     if (preloader.length) {
        preloader.fadeOut();
    }

} );