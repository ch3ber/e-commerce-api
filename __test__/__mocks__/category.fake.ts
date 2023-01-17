
import { CategoryDTO } from '@types'
import { faker } from '@faker-js/faker'

const category: CategoryDTO = {
  image: faker.image.imageUrl(),
  name: faker.random.word()
}

export const oneCategory = (): CategoryDTO => {
  return category
}

export const manyCategories = (limit = 10): CategoryDTO[] => {
  const categories: CategoryDTO[] = []

  for (let i = 0; i < limit; i++) {
    categories.push({
      image: faker.image.imageUrl(),
      name: faker.random.word()
    })
  }

  return [...categories]
}
