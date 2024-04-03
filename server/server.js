// IMPORT DEPENDENCIES
const express = require("express"); // import express
const app = express(); // instantiate express
const cors = require('cors'); // import CORS
require("dotenv").config(); // pull in variables from .env file


// IMPORT ROUTES
const postsRoute = require('./routes/postsRoute');

// IMPORT ENVIRONMENT VARIABLES
const { PORT } = process.env;


// SET UP MIDDLEWARE
app.use(express.static("public")); // make public folder resources available
app.use(cors()); // allow clients from all domains to access server
app.use(express.json()); // parse JSON string into JSON object, and populate req.body with it


// SET UP ROUTES

// declare home path
app.get("/", (_req, res) => {
    const htmlResponse = `
        <h1>Welcome to the API home!</h1>

        <p>There's not much here, really. So you may want to send a get request to /posts. That's where all the good stuff is. It's really up to you, though. You can also just hang out here and.. I don't know.. meditate?</p>

        <p>For instance, you might consider closing your eyes, and taking a moment to situate. Once there, you may be compelled to take in a deep breath through the nose, as deep as you can make it, letting your chest expand as big as it can, picturing it ballooning with all the crisp, fresh air travelling through your nostrils. How long can you hold that balloon?</p>

        <p>Don't hold it any longer if you begin to feel discomfort. Release through the mouth, making an audible exhalation. Feel the relief, and the power of your breath as it leaves, preparing the way for a new inhalation.</p>

        <p>I wish I had the time to keep telling you what things you might be compelled to do were you to keep hanging out on this page, instead of zooming over to /videos, but I don't. Duty calls. So suffice it to say, maybe just do that a few more times: breathe in, hold, and out, and hold, and in, hold, and out.</p>

        <p>You know. That sort of thing. You do that for a while, it's bound to ground you some, make you feel like the world oustide is less noisy, and the world inside is bigger than you can detect with your daytime eye. You might start feeling like time is slowing down, and you are more present, more embodied.</p>

        <h3>And that is good.</h3>

        <p>Now off you go. You've been here long enough. But remember, you can always to come back. <strong>You deserve a moment of peace every now and then.</strong></p>

        <h2><em>So long, and thanks for all the fish.</strong></em></h2>
    `;

    res.send(htmlResponse);
});

app.use('/posts', postsRoute); // posts route


// START SERVER
app.listen(PORT, () => {
    console.log(`Running on ${PORT}!`);
});