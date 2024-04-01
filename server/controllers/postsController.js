// initialize knex
const knex = require('knex')(require('../knexfile'));

/*
 * GET ALL POSTS
 */

// GET EVERYTHING
const getAllPosts = async (_req, res) => {
    try {
        const data = await knex('posts');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL MUSINGS
const getAllMusings = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got all musings!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL PHOTOS
const getAllPhotos = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got all photos!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL MUSIC
const getAllMusic = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got all music!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * GET PHIN'S POSTS
 */

// GET EVERYTHING
const getPhinPosts = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Phin posts!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL MUSINGS
const getPhinMusings = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Phin musings!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL PHOTOS
const getPhinPhotos = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Phin photos!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * GET LIRI'S POSTS
 */

// GET EVERYTHING
const getLiriPosts = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Liri posts!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI MUSINGS
const getLiriMusings = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Liri musings!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI PHOTOS
const getLiriPhotos = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Liri photos!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI MUSIC
const getLiriMusic = async (_req, res) => {
    try {
        res.status(200).send('You did it! You got Liri music!');
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * EXPORT MODULES
 */

module.exports = {
    getAllPosts,
    getAllMusings,
    getAllPhotos,
    getAllMusic,
    getPhinPosts,
    getPhinMusings,
    getPhinPhotos,
    getLiriPosts,
    getLiriMusings,
    getLiriPhotos,
    getLiriMusic
};