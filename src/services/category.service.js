import { Category } from '#db/models/category.model.js'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'

export const categoryService = new MakeBaseServiceFrom(Category)
