import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    login,
} from "../controllers/UserController.js";

const router = express.Router();

// Membuat pengguna baru
router.post('/users', createUser);

// Mendapatkan daftar semua pengguna
router.get('/users', getAllUsers);

// Mendapatkan detail pengguna berdasarkan ID
router.get('/users/:id', getUserById);

// Mengupdate detail pengguna berdasarkan ID
router.patch('/users/:id', updateUserById);

// Menghapus pengguna berdasarkan ID
router.delete('/users/:id', deleteUserById);

router.post('/login', login);

export default router;
