import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import {
  createHouse,
  getAllHouses,
  getHouseById,
  updateHouseById,
  deleteHouseById,
  uploadImageToHouse,
  deleteImageFromHouse,
} from "../controllers/HouseController.js";
import upload from '../middlewares/multerConfig.js'; // Import konfigurasi Multer


const router = express.Router();

// Rute untuk membuat rumah baru
router.post("/houses", createHouse);

// Rute untuk mengambil semua data rumah
router.get("/houses", getAllHouses);

// Rute untuk mengambil data rumah berdasarkan ID
router.get("/houses/:id", getHouseById);

// Rute untuk mengupdate data rumah berdasarkan ID
router.put("/houses/:id", updateHouseById);

// Rute untuk menghapus data rumah berdasarkan ID
router.delete("/houses/:id", deleteHouseById);

// Rute untuk mengunggah gambar ke rumah berdasarkan ID
router.post('/houses/:id/upload-image', upload.single('image'), uploadImageToHouse);

// Rute untuk menghapus gambar dari rumah berdasarkan ID
router.delete("/houses/:id/delete-image", deleteImageFromHouse);




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, '../uploads', filename));
});

router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

export default router;
