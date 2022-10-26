/**
 * htsa template js - 0.1.0
 * https://codestar.com.ng
 *
 * Copyright 2022 Codestar Technologies
 * Released under AGPL-3.0-or-later
 * https://www.gnu.org/licenses/agpl-3.0.en.html
 */

const mobileMenuLinksTemplate = require('../templates/mobileMenuLinks.hbs');
const PCMenuLinksTemplate = require('../templates/PCMenuLinks.hbs');
const footerMenuLinksTemplate = require('../templates/footerMenuLinks.hbs');
const aboutHTSAMenuLinksTemplate = require('../templates/htsaMenuLinks.hbs');
const frontpageStatisticsTemplate = require('../templates/frontpageStatistics.hbs');
const frontpageResourcesTemplate = require('../templates/frontpageResources.hbs');
const frontpageFeaturedBlogsTemplate = require('../templates/frontpageFeaturedBlogs.hbs');
const frontpageLatestBlogsTemplate = require('../templates/frontpageLatestBlogs.hbs');

const menuLinksJSON = require('../data/menu.json');
const statisticsJSON = require('../data/statistics.json');
const resourcesJSON = require('../data/resources.json');
const blogsJSON = require('../data/blogs.json');

const mobileMenu = $('[data-htsa-id="mobileMenu"]');
const PCMenuRight = $('[data-htsa-id="pcMenuRight"]');
const footerMenu = $('[data-htsa-id="footerMenu"]');
const aboutHTSAMenu = $('[data-htsa-id="aboutHTSAMenu"]');
const frontpageStatistics = $('[data-htsa-id="frontpageStatistics"]');
const frontpageResources = $('[data-htsa-id="frontpageResources"]');
const frontpageFeaturedBlogs = $('[data-htsa-id="featuredBlogCarousel"]');
const frontpageLatestBlogs = $('[data-htsa-id="latestBlogs"]');

jQuery(function ($) {
    /**
     * Load mobile menu links
     */
    if (mobileMenu.length) {
        mobileMenu.prepend(mobileMenuLinksTemplate(menuLinksJSON));
    }

    /**
     * Load pc menu links
     */
    if (PCMenuRight.length) {
        PCMenuRight.prepend(PCMenuLinksTemplate(menuLinksJSON));
    }

    /**
     * Load footer menu links
     */
    if (footerMenu.length) {
        footerMenu.prepend(footerMenuLinksTemplate(menuLinksJSON));
    }

    /**
     * Load about featured site links
     */
    if (aboutHTSAMenu.length) {
        aboutHTSAMenu.prepend(aboutHTSAMenuLinksTemplate(menuLinksJSON));
    }

    /**
     * Load frontpage statistics
     */
    if (frontpageStatistics.length) {
        frontpageStatistics.prepend(frontpageStatisticsTemplate(statisticsJSON));
    }

    /**
     * Load frontpage resources
     */
    if (frontpageResources.length) {
        frontpageResources.prepend(frontpageResourcesTemplate(resourcesJSON));
    }

    /**
     * Load frontpage featured blogs
     */
    if (frontpageFeaturedBlogs.length) {
        frontpageFeaturedBlogs.prepend(frontpageFeaturedBlogsTemplate(blogsJSON));
    }

    /**
     * Load frontpage latest blogs
     */
    if (frontpageLatestBlogs.length) {
        frontpageLatestBlogs.prepend(frontpageLatestBlogsTemplate(blogsJSON));
    }
});