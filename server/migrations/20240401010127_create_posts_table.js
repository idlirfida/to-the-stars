/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id').primary();
        table.string('post_title');
        table.enum('post_type', ['text', 'photo', 'music']).notNullable();
        table.text('post_body');
        // table.integer('post_likes').notNullable().defaultTo(0);
        table.string('post_file');
        table
            .integer('user_id')
            .unsigned()
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};