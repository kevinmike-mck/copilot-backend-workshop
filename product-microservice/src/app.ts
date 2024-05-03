import express from "express";
import { setProductRoutes } from "./routes/productRoutes";
import "reflect-metadata";
import { createConnection } from "typeorm";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    const app = express();

    // Middleware
    app.use(express.json());

    // Routes
    setProductRoutes(app);

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
