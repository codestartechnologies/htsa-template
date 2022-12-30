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
const frontpageReviewsTemplate = require('../templates/frontpageReviews.hbs');
const searchpageResultsTemplate = require('../templates/searchpageResults.hbs');
const postListingsTemplate = require('../templates/postListings.hbs');
const postCommentsTemplate = require('../templates/postComments.hbs');
const postCommentsTemplate2 = require('../templates/postComments2.hbs');
const asideLatestPostsTemplate = require('../templates/asideLatestPosts.hbs');
const asideLatestPostsWithImageTemplate = require('../templates/asideLatestPostsWithImage.hbs');
const asideTrendingTopicsTemplate = require('../templates/asideTrendingTopics.hbs');
const asidePostsCarouselTemplate = require('../templates/asidePostsCarousel.hbs');
const postsWidgetTemplate = require('../templates/postsWidgets.hbs');
const trafficOffencePenaltiesTemplate = require('../templates/trafficOffencePenalties.hbs');
const principalOfficersTemplate = require('../templates/principalOfficers.hbs');
const profilesListTemplate = require('../templates/profilesList.hbs');
const headOfficesTemplate = require('../templates/headOffices.hbs');

const menuLinksJSON = require('../data/menu.json');
const statisticsJSON = require('../data/statistics.json');
const resourcesJSON = require('../data/resources.json');
const blogsJSON = require('../data/blogs.json');
const searchResultsJSON = require('../data/search-results.json');
const topicsJSON = require('../data/topics.json');
const commentsJSON = require('../data/comments.json');
const penaltiesJSON = require('../data/penalties.json');
const officersJSON = require('../data/officers.json');
const profilesJSON = require('../data/profiles.json');
const headOfficesJSON = require('../data/head-offices.json');
const reviewsJSON = require('../data/reviews.json');

const mobileMenu = $('[data-htsa-id="mobileMenu"]');
const PCMenuRight = $('[data-htsa-id="pcMenuRight"]');
const footerMenu = $('[data-htsa-id="footerMenu"]');
const aboutHTSAMenu = $('[data-htsa-id="aboutHTSAMenu"]');
const frontpageStatistics = $('[data-htsa-id="frontpageStatistics"]');
const frontpageResources = $('[data-htsa-id="frontpageResources"]');
const frontpageFeaturedBlogs = $('[data-htsa-id="featuredBlogCarousel"]');
const frontpageLatestBlogs = $('[data-htsa-id="latestBlogs"]');
const frontpageReviews = $('[data-htsa-id="featuredReviews"]');
const searchpageResults = $('[data-htsa-id="searchResults"]');
const postListings = $('[data-htsa-id="postListings"]');
const postComments = $('[data-htsa-id="postComments"]');
const asideLatestPosts = $('[data-htsa-id="asideLatestPosts"]');
const asideLatestPostsWithImage = $('[data-htsa-id="asideLatestPostsWithImage"]');
const asideTrendingTopics = $('[data-htsa-id="asideTrendingTopics"]');
const asidePostsCarousel = $('[data-htsa-id="asideCarousel"]');
const postsWidget = $('[data-htsa-id="postsWidget"]');
const trafficOffencePenaltiesTable = $('[data-htsa-id="penaltiesTable"]');
const principalOfficersTable = $('[data-htsa-id="principalOfficersTable"]');
const profilesList = $('[data-htsa-id="profilesList"]');
const headOffices = $('[data-htsa-id="headOffices"]');

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
     * Load front page featured reviews
     */
    if (frontpageReviews.length) {
        frontpageReviews.prepend(frontpageReviewsTemplate(reviewsJSON));
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
     * Load aside latest posts with widget
     */
    if (asideLatestPostsWithImage.length) {
        asideLatestPostsWithImage.prepend(asideLatestPostsWithImageTemplate(blogsJSON));
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
        postComments.prepend(postCommentsTemplate2(commentsJSON));
    }

    /**
     * Load postsWidgets data
     */
    if (postsWidget.length) {
        postsWidget.prepend(postsWidgetTemplate(blogsJSON));
    }

    /**
     * Load data for posts carousel in aside
     */
    if (asidePostsCarousel.length) {
        asidePostsCarousel.prepend(asidePostsCarouselTemplate(blogsJSON));
    }

    /**
     * Load data for traffic offence penalties table
     */
    if (trafficOffencePenaltiesTable.length) {
        trafficOffencePenaltiesTable.prepend(trafficOffencePenaltiesTemplate(penaltiesJSON));
    }

    /**
     * Load data for principal officers table
     */
    if (principalOfficersTable.length) {
        principalOfficersTable.prepend(principalOfficersTemplate(officersJSON));
    }

    /**
     * Load profile lists
     */
    if (profilesList.length) {
        profilesList.prepend(profilesListTemplate(profilesJSON));
    }

    /**
     * Load head offices
     */
    if (headOffices.length) {
        headOffices.prepend(headOfficesTemplate(headOfficesJSON));
    }
});