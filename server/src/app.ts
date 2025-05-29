import express from 'express';
import {errorHandler} from "./middleware/errorHandler";

import productRoutes from "./routes/productRoutes";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is alive");
})

// Routes
app.use('/api/products', productRoutes);

// error handler
app.use(errorHandler);


export default app;