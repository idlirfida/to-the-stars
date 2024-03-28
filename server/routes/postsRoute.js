const postsController = require('../controllers/postsController');
const express = require('express');
const router = express.Router();
const { v4: uuid } = require("uuid");


/*
 * FOR ALL POSTS
 */

// EVERYTHING
router
    .route('/')
    .get(postsController.getAllPosts);

// MUSINGS
router
    .route('/musings')
    .get(postsController.getAllMusings);

// PHOTOS
router
    .route('/photos')
    .get(postsController.getAllPhotos);

// MUSIC
router
    .route('/music')
    .get(postsController.getAllMusic);


/*
 * FOR PHIN POSTS
 */

// EVERYTHING
router
    .route('/phin')
    .get(postsController.getPhinPosts);

// MUSINGS
router
    .route('/phin/musings')
    .get(postsController.getPhinMusings);

// PHOTOS
router
    .route('/phin/photos')
    .get(postsController.getPhinPhotos);


/*
 * FOR LIRI POSTS
 */

// EVERYTHING
router
    .route('/liri')
    .get(postsController.getLiriPosts);

// MUSINGS
router
    .route('/liri/musings')
    .get(postsController.getLiriMusings);

// PHOTOS
router
    .route('/liri/photos')
    .get(postsController.getLiriPhotos);

// MUSIC
router
    .route('/liri/music')
    .get(postsController.getLiriMusic);


/*
 * EXPORT MODULES
 */

module.exports = router;