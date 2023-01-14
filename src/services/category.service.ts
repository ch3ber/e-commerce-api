import { Category } from '@db/models/category.model'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom'

export const categoryService = new MakeBaseServiceFrom(Category)
