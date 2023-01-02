// @ts-check
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom'
import { Product } from '../db/models/product.model'

const productService = new MakeBaseServiceFrom(Product)

export defaul { productService }
