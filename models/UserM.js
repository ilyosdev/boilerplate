const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class User extends Model {
    static get tableName() {
        return 'users'
    }

    $beforeInsert() {
        this.created_at = new Date()
            .toISOString()
            .replace(/([^T]+)T([^\.]+).*/g, '$1 $2')
    }
}

module.exports = User
