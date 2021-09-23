const faker = require('faker/locale/en')

const createFakeuser = () => ({
    phone: faker.phone.phoneNumberFormat(),
    first_name: faker.name.firstName(),
    is_verified: '1',
})

exports.seed = async function (knex, Promise) {
    fakeUsers = []
    desiredFakeUsers = 20

    // Deletes ALL existing entries
    // await knex('users').del()

    for (let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakeuser())
    }

    // Inserts seed entries
    await knex('users').insert(fakeUsers)
}
