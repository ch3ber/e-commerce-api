// @ts-check
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import { Product } from '../db/models/product.model.js'

const productService = new MakeBaseServiceFrom(Product)

export default { productService }
