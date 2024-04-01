/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("posts").del();
    await knex("posts").insert([
        {
            user_id: 1,
            post_type: 'text',
            post_title: 'Test Post 1',
            post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.\n\nInteger tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.',
            post_file: ''
        },
        {
            user_id: 1,
            post_type: 'text',
            post_title: 'Test Post 2',
            post_body: 'Integer tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.\n\nInteger tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.',
            post_file: ''
        },
        {
            user_id: 2,
            post_type: 'photo',
            post_title: 'A Quiet Lake',
            post_body: 'A serene lake sits quietly beneath the soft caresses of the morning sun, its surface a mirror reflecting the ballet of the clouds above. Around it, the forest stands as a testament to the quiet strength of nature, undisturbed and majestic. The water, clear as crystal, whispers tales of the wind and the woods, of the dance of seasons through the years. This moment, captured in the stillness of the photograph, invites the observer into a meditation on tranquility and the understated elegance of the natural world. It speaks of the peace that can be found in solitude, of the subtle interplay between light and shadow, and of the timeless beauty that lies in the simple, silent places of the earth.',
            post_file: '007.jpg'
        },
        {
            user_id: 2,
            post_type: 'photo',
            post_title: 'Dreamy Skyline',
            post_body: '',
            post_file: '003.jpg'
        },
        {
            user_id: 1,
            post_type: 'photo',
            post_title: 'Golden Fields',
            post_body: 'The golden fields stretch out towards the horizon, bathed in the warm glow of the setting sun. Each blade of grass shimmers in the light, a sea of gold undulating in the gentle breeze. This scene, captured in the heart of summer, evokes a sense of warmth and abundance, a reminder of the earth\'s generosity. The horizon blurs the line between earth and sky, a canvas painted with the hues of dusk. It is a moment of quiet glory, a daily miracle that whispers of cycles and seasons, of time passing and the perpetual renewal of life. In this photograph, the viewer is invited to reflect on the beauty of the natural world, on the rhythm of growth and decay, and on the simple, profound joys that can be found in the landscape around us.',
            post_file: '004.jpg'
        },
        {
            user_id: 2,
            post_type: 'music',
            post_title: 'Ocean Waves',
            post_body: 'It is a moment of quiet glory, a daily miracle that whispers of cycles and seasons, of time passing and the perpetual renewal of life. In this photograph, the viewer is invited to reflect on the beauty of the natural world, on the rhythm of growth and decay, and on the simple, profound joys that can be found in the landscape around us.',
            post_file: 'ocean.mp3'
        },
        {
            user_id: 1,
            post_type: 'text',
            post_title: 'The Art of Cooking',
            post_body: 'Cooking is an art that transcends cultural boundaries, a universal language of flavors, aromas, and textures. It is a craft that has evolved through centuries, with each generation adding its layer of innovation and creativity. The kitchen is a canvas where ingredients come together to create something greater than the sum of their parts. Cooking is about exploration and experimentation, a journey through the senses. It brings people together, forging connections and creating memories around the shared table. Whether it\'s the simplicity of a perfectly roasted chicken or the complexity of a multi-course meal, the act of cooking is a celebration of life itself. Through the alchemy of heat, time, and love, cooking transforms the mundane into the magical, inviting us to taste the world in a spoonful.\n\nInteger tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.\n\nInteger tempus, elit in laoreet posuere, lectus neque blandit dui, et placerat urna diam mattis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.',
            post_file: ''
        }
    ]);
};