import { Category } from '../db/models/category.model.js'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'

const categoryService = new MakeBaseServiceFrom(Category)

export default { categoryService }
