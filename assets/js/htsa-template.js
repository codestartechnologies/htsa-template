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
const searchpageResultsTemplate = require('../templates/searchpageResults.hbs');
const postListingsTemplate = require('../templates/postListings.hbs');
const postCommentsTemplate = require('../templates/postComments.hbs');
const asideLatestPostsTemplate = require('../templates/asideLatestPosts.hbs');
const asideTrendingTopicsTemplate = require('../templates/asideTrendingTopics.hbs');
const postsWidgetTemplate = require('../templates/postsWidgets.hbs');

const menuLinksJSON = require('../data/menu.json');
const statisticsJSON = require('../data/statistics.json');
const resourcesJSON = require('../data/resources.json');
const blogsJSON = require('../data/blogs.json');
const searchResultsJSON = require('../data/search-results.json');
const topicsJSON = require('../data/topics.json');
const commentsJSON = require('../data/comments.json');

const mobileMenu = $('[data-htsa-id="mobileMenu"]');
const PCMenuRight = $('[data-htsa-id="pcMenuRight"]');
const footerMenu = $('[data-htsa-id="footerMenu"]');
const aboutHTSAMenu = $('[data-htsa-id="aboutHTSAMenu"]');
const frontpageStatistics = $('[data-htsa-id="frontpageStatistics"]');
const frontpageResources = $('[data-htsa-id="frontpageResources"]');
const frontpageFeaturedBlogs = $('[data-htsa-id="featuredBlogCarousel"]');
const frontpageLatestBlogs = $('[data-htsa-id="latestBlogs"]');
const searchpageResults = $('[data-htsa-id="searchResults"]');
const postListings = $('[data-htsa-id="postListings"]');
const postComments = $('[data-htsa-id="postComments"]');
const asideLatestPosts = $('[data-htsa-id="asideLatestPosts"]');
const asideTrendingTopics = $('[data-htsa-id="asideTrendingTopics"]');
const postsWidget = $('[data-htsa-id="postsWidget"]');

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
     * Load front page statistics
     */
    if (frontpageStatistics.length) {
        frontpageStatistics.prepend(frontpageStatisticsTemplate(statisticsJSON));
    }

    /**
     * Load front page resources
     */
    if (frontpageResources.length) {
        frontpageResources.prepend(frontpageResourcesTemplate(resourcesJSON));
    }

    /**
     * Load front page featured blogs
     */
    if (frontpageFeaturedBlogs.length) {
        frontpageFeaturedBlogs.prepend(frontpageFeaturedBlogsTemplate(blogsJSON));
    }

    /**
     * Load front page latest blogs
     */
    if (frontpageLatestBlogs.length) {
        frontpageLatestBlogs.prepend(frontpageLatestBlogsTemplate(blogsJSON));
    }

    /**
     * Load search page results
     */
    if (searchpageResults.length) {
        searchpageResults.prepend(searchpageResultsTemplate(searchResultsJSON));
    }

    /**
     * Load post page data
     */
    if (postListings.length) {
        postListings.prepend(postListingsTemplate(blogsJSON));
    }

    /**
     * Load aside latest posts
     */
    if (asideLatestPosts.length) {
        asideLatestPosts.prepend(asideLatestPostsTemplate(blogsJSON));
    }

    /**
     * Load aside trending topics
     */
    if (asideTrendingTopics.length) {
        asideTrendingTopics.prepend(asideTrendingTopicsTemplate(topicsJSON));
    }

    /**
     * Load post comments
     */
    if (postComments.length) {
        postComments.prepend(postCommentsTemplate(commentsJSON));
    }

    /**
     * Load postsWidgets data
     */
    if (postsWidget.length) {
        postsWidget.prepend(postsWidgetTemplate(blogsJSON));
    }
});