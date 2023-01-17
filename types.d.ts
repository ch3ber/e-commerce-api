export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt: string;
}

export interface CategoryDTO extends Omit<Category, 'id' | 'createdAt'> {
}


export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  createdAt: string;
  categoryId: number;
  category: Category;
}

export interface ProductDTO extends Omit< Product, 'id' | 'category' | 'createdAt'> {
}

export type EmailBody = {
  from: string | undefined,
  to: string | string[], // list of receivers
  subject: string,
  text: string, // plain text body
  html: string // html body
}
