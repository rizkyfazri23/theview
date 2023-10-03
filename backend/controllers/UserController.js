import User from "../models/UserModel.js";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";


// Fungsi untuk membuat pengguna baru
export const createUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Mengenkripsi kata sandi sebelum penyimpanan
      const hashedPassword = await bcrypt.hash(password, 10); // Gunakan salt dengan nilai 10
      
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user.", error });
    }
  };

// Fungsi untuk mengambil semua data pengguna
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users.", error });
  }
};

// Fungsi untuk mengambil data pengguna berdasarkan ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user.", error });
  }
};

// Fungsi untuk mengupdate data pengguna berdasarkan ID
export const updateUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const { username, password } = req.body;
      
      // Mengenkripsi kata sandi sebelum penyimpanan
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, password: hashedPassword },
        { new: true }
      );
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }
      
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user.", error });
    }
  };

// Fungsi untuk menghapus data pengguna berdasarkan ID
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user.", error });
  }
};


// Fungsi untuk login
export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Cari pengguna berdasarkan username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Pengguna tidak ditemukan.' });
      }
  
      // Gunakan fungsi comparePassword untuk membandingkan password yang dimasukkan dengan password yang di-hash
      const isPasswordCorrect = await comparePassword(password, user.password);
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Password salah.' });
      }
  
      // Password benar, Anda dapat menghasilkan token
      const token = jwt.sign({ userId: user._id }, 'Yurayura379', { expiresIn: '1h' }); // Ganti 'secret-key' dengan kunci rahasia Anda
      // Atau gunakan proses yang lebih aman untuk menghasilkan kunci rahasia dan mengelola waktu kedaluwarsa
  
      res.status(200).json({ message: 'Login berhasil', token });
  
    } catch (error) {
      res.status(500).json({ message: 'Login gagal.', error });
    }
};
  
  // Fungsi untuk membandingkan password
  const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        console.log(bcrypt.compare(inputPassword, hashedPassword));
      return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        console.log(error);

      throw error;
    }
  };
