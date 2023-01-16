
import { Category } from '@types'
import { faker } from '@faker-js/faker'

const category: Category = {
    id: faker.datatype.number({min: 1, max: 2}),
    createdAt: faker.datatype.string(),
    image: faker.image.imageUrl(),
    name: faker.commerce.department()
}

export const oneCategory = (): Category => {
  return category
}

export const manyProducts = (limit = 10): Category[] => {
  const categories: Category[] = []

  for (let i = 0; i < limit; i++) {
    categories.push(oneCategory())
  }

  return [...categories]
}
