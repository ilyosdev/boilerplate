exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id')
        t.string('phone').notNullable()
        t.string('first_name')
        t.string('last_name')
        t.string('verification_code').default(0)
        t.integer('is_verified').default('0')
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
}
