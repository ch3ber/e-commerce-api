const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')
const { Order } = require('../db/models/order.model')

const orderService = new MakeBaseServiceFrom(Order)

module.exports = { orderService }
