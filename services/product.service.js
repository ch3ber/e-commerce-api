// @ts-check
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import { Product } from '../db/models/product.model.js'

export const productService = new MakeBaseServiceFrom(Product)
