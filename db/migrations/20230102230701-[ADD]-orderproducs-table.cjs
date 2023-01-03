// require('@babel/register')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { OrderProducts, orderProductsSchema } = await import('../models/order-product.js')
    await queryInterface.createTable(OrderProducts.tableName, orderProductsSchema)
  },

  async down (queryInterface, Sequelize) {
    const { OrderProducts } = await import('../models/order-product.js')
    await queryInterface.dropTable(OrderProducts.tableName)
  }
}
