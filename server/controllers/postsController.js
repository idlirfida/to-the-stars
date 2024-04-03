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
        const data = await knex('posts').where('post_type', 'text');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL PHOTOS
const getAllPhotos = async (_req, res) => {
    try {
        const data = await knex('posts').where('post_type', 'photo');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET ALL MUSIC
const getAllMusic = async (_req, res) => {
    try {
        const data = await knex('posts').where('post_type', 'music');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * GET PHIN'S POSTS
 */

// GET ALL PHIN POSTS
const getPhinPosts = async (_req, res) => {
    try {
        const data = await knex('posts').where('user_id', '2');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET PHIN MUSINGS
const getPhinMusings = async (_req, res) => {
    try {
        const data = await knex('posts')
            .where('user_id', '2')
            .where('post_type', 'text');

        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET PHIN PHOTOS
const getPhinPhotos = async (_req, res) => {
    try {
        const data = await knex('posts')
            .where('user_id', '2')
            .where('post_type', 'photo');

        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * GET LIRI'S POSTS
 */

// GET ALL LIRI POSTS
const getLiriPosts = async (_req, res) => {
    try {
        const data = await knex('posts').where('user_id', '1');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI MUSINGS
const getLiriMusings = async (_req, res) => {
    try {
        const data = await knex('posts')
            .where('user_id', '1')
            .where('post_type', 'text');

        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI PHOTOS
const getLiriPhotos = async (_req, res) => {
    try {
        const data = await knex('posts')
            .where('user_id', '1')
            .where('post_type', 'photo');
            
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}

// GET LIRI MUSIC
const getLiriMusic = async (_req, res) => {
    try {
        const data = await knex('posts')
            .where('user_id', '1')
            .where('post_type', 'music');
            
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send('Error retrieving the requested resource!');
    }
}


/*
 * MAKE NEW POST
 */

const makeNewPost = async (req, res) => {
    try {

        // destructure incoming request data
        const { 
            user_id,
            post_title,
            post_type,
            post_body,
            post_file
        } = req.body;

        // construct new post
        const newPost = await knex('posts').insert({
            user_id,
            post_title,
            post_type,
            post_body,
            post_file
        });
            
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).send('Error creating new resource!');
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
    getLiriMusic,
    makeNewPost
};