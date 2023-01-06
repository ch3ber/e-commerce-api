
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

## Live demo

[Demo Link](https://ch3ber.github.io)


## API Reference

Base URL: `http://localhost:3000/api/v1`

To more info see the [swagger docs](https://ch3ber.github.io)

| End points    | Description               |
| :-------------| :-------------------------|
| `/users`      | Acces to users schema     |
| `/products`   | Acces to products schema  |
| `/categories` | Acces to categories schema|
| `/customers`  | Acces to customers schema |
| `/orders`     | Acces to orders schema    |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

You have a template in `.env.exmaple` file

```
PORT=
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
DB_NAME=''
DB_PORT=''
```

## Authors

- [@ch3ber](https://www.github.com/ch3ber)


## License

[MIT](https://choosealicense.com/licenses/mit/)

