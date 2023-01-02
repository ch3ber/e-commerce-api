import { Category } from '../db/models/category.model'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom'

const categoryService = new MakeBaseServiceFrom(Category)

export default { categoryService }
