// app.ts
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig"); // Adjust the path based on your project structure

const app = express();
const PORT = 3000;

// Your API routes go here...

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
