import { faker } from '@faker-js/faker'

class ItemApi {

  requisicaoItem() {

    const userData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      title: 'Mr',
      birth_date: '10',
      birth_month: 'May',
      birth_year: '1990',
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: 'Apt 101',
      country: 'United States',
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      city: faker.location.city(),
      mobile_number: faker.phone.number()
    }

    return cy.request({
      method: 'POST',
      url: '/api/createAccount',
      form: true,
      body: userData,
      failOnStatusCode: false
    }).as('response')
  }

  validarResponse() {
  cy.get('@response').then((res) => {

    const body = typeof res.body === 'string'
      ? JSON.parse(res.body)
      : res.body

    expect(res.status).to.eq(200)
    expect(body).to.have.property('message', 'User created!')
    expect(body).to.have.property('responseCode', 201)
  })

  }


}

export default new ItemApi()