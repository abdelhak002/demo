module.exports = function () {
  const { faker } = require('@faker-js/faker');
  var _ = require('lodash');
  return {
    customers: _.times(10, function (index) {
      return {
        id: index + 1,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        address:
          faker.address.streetAddress() +
          ' ' +
          faker.address.city() +
          ' ' +
          faker.address.state() +
          ' ' +
          faker.address.zipCode(),
        phone: faker.phone.number(),
      };
    }),
    suppliers: _.times(10, function (index) {
      return {
        id: index + 1,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        address:
          faker.address.streetAddress() +
          ' ' +
          faker.address.city() +
          ' ' +
          faker.address.state() +
          ' ' +
          faker.address.zipCode(),
        phone: faker.phone.number(),
      };
    }),
    companies: _.times(10, function (index) {
      return {
        id: index + 1,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        address:
          faker.address.streetAddress() +
          ' ' +
          faker.address.city() +
          ' ' +
          faker.address.state() +
          ' ' +
          faker.address.zipCode(),
        phone: faker.phone.number(),
        products: faker.helpers.arrayElements([
          faker.random.numeric(1, { bannedDigits: [0] }),
          faker.random.numeric(1, { bannedDigits: [0] }),
          faker.random.numeric(1, { bannedDigits: [0] }),
        ]),
      };
    }),
    products: _.times(10, function (index) {
      return {
        id: index + 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        companyId: faker.random.numeric(1, { bannedDigits: [0] }),
      };
    }),
    orders: _.times(10, function (index) {
      return {
        id: index + 1,
        customerId: faker.random.numeric(1, { bannedDigits: [0] }),
        supplierId: faker.random.numeric(1, { bannedDigits: [0] }),
        companyId: faker.random.numeric(1, { bannedDigits: [0] }),
        orderDate: faker.date.past(),
        deliveryDate: faker.date.future(),
        status: faker.helpers.arrayElement([
          'pending',
          'shipped',
          'delivered',
          'cancelled',
          'rejected',
        ]),
        items: _.times(3, function (index) {
          return {
            id: index + 1,
            productId: faker.random.numeric(1, { bannedDigits: [0] }),
            quantity: faker.random.numeric(1, { bannedDigits: [0] }),
            price: faker.commerce.price(),
          };
        }),
      };
    }),
  };
};
