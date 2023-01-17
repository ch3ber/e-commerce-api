import { ProductDTO } from '@types'
import { faker } from '@faker-js/faker'

const product: ProductDTO = {
  categoryId: faker.datatype.number({min: 1, max: 2}),
  description: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  name: faker.commerce.department(),
  price: faker.datatype.number(),
}

export const oneProduct = (): ProductDTO => {
  return product
}

export const manyProducts = (limit = 10, validCategoryId): ProductDTO[] => {
  const products: ProductDTO[] = []

  for (let i = 0; i < limit; i++) {
    products.push({
      categoryId: validCategoryId,
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      name: faker.commerce.department(),
      price: faker.datatype.number(),
    })
  }

  return [...products]
}
