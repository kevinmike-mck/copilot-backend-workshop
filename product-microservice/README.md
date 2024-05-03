# Product Microservice

This is a REST API microservice for managing products. It is built using TypeScript, Express, and TypeORM.

## Project Structure

```
product-microservice
├── src
│   ├── entity
│   │   └── Product.ts
│   ├── controller
│   │   └── ProductController.ts
│   ├── repository
│   │   └── ProductRepository.ts
│   ├── service
│   │   └── ProductService.ts
│   ├── middleware
│   │   └── authMiddleware.ts
│   ├── routes
│   │   └── productRoutes.ts
│   └── app.ts
├── ormconfig.json
├── package.json
├── tsconfig.json
└── README.md
```

## Files

### `src/entity/Product.ts`

This file defines the `Product` entity class using TypeORM decorators. It specifies the table name, columns, and relationships with other entities.

### `src/controller/ProductController.ts`

This file exports a class `ProductController` which handles the HTTP requests related to products. It contains methods such as `getProducts`, `createProduct`, `updateProduct`, and `deleteProduct`.

### `src/repository/ProductRepository.ts`

This file exports a class `ProductRepository` which extends the TypeORM `Repository` class. It provides methods for querying and manipulating the `Product` entity in the database.

### `src/service/ProductService.ts`

This file exports a class `ProductService` which contains the business logic for handling products. It uses the `ProductRepository` to interact with the database.

### `src/middleware/authMiddleware.ts`

This file exports a middleware function `authMiddleware` which is responsible for authenticating the requests. It can be used to protect certain routes or actions related to products.

### `src/routes/productRoutes.ts`

This file exports a function `setProductRoutes` which sets up the routes for the product-related endpoints. It uses the `ProductController` to handle the requests.

### `src/app.ts`

This file is the entry point of the application. It creates an instance of the Express app, sets up middleware, and registers the product routes.

### `ormconfig.json`

This file is the configuration file for TypeORM. It specifies the database connection details, entities, and migrations.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### `README.md`

This file contains the documentation for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Configure the database connection in `ormconfig.json`.
4. Run the application using `npm start`.

## API Endpoints

- GET `/products`: Get all products.
- GET `/products/:id`: Get a specific product by ID.
- POST `/products`: Create a new product.
- PUT `/products/:id`: Update a product by ID.
- DELETE `/products/:id`: Delete a product by ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.