
# E-Commerce's Rest API

E-commerce CRUD with **postgresql** and **express.js**.
The API's DB is preconfigurated in a docker container.

To run the project locally follow the next steps.
## Run Locally

Clone the project

```bash
  git clone https://github.com/ch3ber/postgresql-crud
```

Go to the project directory

```bash
  cd postgresql-crud
```

Install dependencies

```bash
  npm install
```

Start the dev server

```bash
  npm run dev
```

Start the server

```bash
  npm run start
```

## API Reference

Base URL: `http://localhost:3000/api/v1`

| End points    | Description               |
| :-------------| :-------------------------|
| `/users`      | Acces to users schema     |
| `/products`   | Acces to products schema  |
| `/categories` | Acces to categories schema|
| `/customers`  | Acces to customers schema |
| `/orders`     | Acces to orders schema    |

#### Get all products

```http
  GET /products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`      | `string` | **Required**. Id of item to fetch |

#### Get product

```http
  GET /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Takes two numbers and returns the sum.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Demo

[Demo Link](https://ch3ber.github.io/linktree)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Authors

- [@ch3ber](https://www.github.com/ch3ber)


## License

[MIT](https://choosealicense.com/licenses/mit/)

