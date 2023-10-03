import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import houseRoutes from "./routes/HouseRoute.js"; // Pastikan path ini sesuai
import userRoutes from "./routes/UserRoute.js"; // Pastikan path ini sesuai


const app = express();
mongoose.connect('mongodb://localhost:27017/theview',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());

// Gunakan route untuk endpoint "/houses"
app.use(houseRoutes); // Pastikan Anda menggunakan middleware di sini
app.use(userRoutes); // Pastikan Anda menggunakan middleware di sini


const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}...`));
