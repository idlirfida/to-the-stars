/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
    await knex("users").del();
    await knex("users").insert([
        {
            id: 1,
            user_name: 'Idlir Fida',
            user_email: 'idlirfida@gmail.com',
            user_password: 'antidisestablishmentarianism',
            user_role: 'author'
        },
        {
            id: 2,
            user_name: 'Delphina Liles',
            user_email: 'juniperstrength@gmail.com',
            user_password: 'ayapapaya',
            user_role: 'author'
        },
        {
            id: 3,
            user_name: 'Commenter 1',
            user_email: 'test1@test.com',
            user_password: 'password1',
            user_role: 'commenter'
        },
        {
            id: 4,
            user_name: 'Commenter 2',
            user_email: 'test2@test.com',
            user_password: 'password2',
            user_role: 'commenter'
        },
    ]);
};