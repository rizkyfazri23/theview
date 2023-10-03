import House from "../models/HouseModel.js";


// Fungsi untuk membuat rumah baru
export const createHouse = async (req, res) => {
  try {
    const { status, progress, type, phase, x, y, images } = req.body;
    const newHouse = new House({ status, progress, type, phase, x, y, images });
    await newHouse.save();
    res.status(201).json(newHouse);
  } catch (error) {
    res.status(500).json({ message: "Failed to create house.", error });
  }
};



export const getAllHouses = async (req, res) => {
  try {
    const {
      filter81to100,
      filter41to80,
      filter0to40,
      filterAvailable,
      filterSoldOut
    } = req.query;
    let filter = {};

    // Menambahkan filter berdasarkan nilai progress yang dipilih
    if (filter81to100 === 'true') {
      filter.progress = { $gte: 81, $lte: 100 };
    }
    if (filter41to80 === 'true') {
      filter.progress = { $gte: 41, $lte: 80 };
    }
    if (filter0to40 === 'true') {
      filter.progress = { $gte: 0, $lte: 40 };
    }

    // Menambahkan filter berdasarkan status yang dipilih
    if (filterAvailable === 'true') {
      filter.status = 1; // Filter rumah yang tersedia
    }
    if (filterSoldOut === 'true') {
      filter.status = 2; // Filter rumah yang sudah habis
    }

    const houses = await House.find(filter);
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch houses.", error });
  }
};


// // Fungsi untuk mengambil semua data rumah
// export const getAllHouses = async (req, res) => {
//   try {
//     const houses = await House.find();
//     res.status(200).json(houses);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch houses.", error });
//   }
// };

// Fungsi untuk mengambil data rumah berdasarkan ID
export const getHouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await House.findById(id);
    if (!house) {
      return res.status(404).json({ message: "House not found." });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch house.", error });
  }
};

// Fungsi untuk mengupdate data rumah berdasarkan ID
export const updateHouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, progress, type, phase, x, y, images } = req.body;
    const updatedHouse = await House.findByIdAndUpdate(
      id,
      { status, progress, type, phase, x, y, images },
      { new: true }
    );
    if (!updatedHouse) {
      return res.status(404).json({ message: "House not found." });
    }
    res.status(200).json(updatedHouse);
  } catch (error) {
    res.status(500).json({ message: "Failed to update house.", error });
  }
};

// Fungsi untuk menghapus data rumah berdasarkan ID
export const deleteHouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHouse = await House.findByIdAndDelete(id);
    if (!deletedHouse) {
      return res.status(404).json({ message: "House not found." });
    }
    res.status(200).json(deletedHouse);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete house.", error });
  }
};

// Fungsi untuk mengunggah gambar ke rumah berdasarkan ID
export const uploadImageToHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { file } = req;

    // Cek apakah rumah dengan ID yang diberikan ada
    const house = await House.findById(id);

    if (!house) {
      return res.status(404).json({ message: "House not found." });
    }

    // Simpan nama file gambar ke dalam database
    house.images.push("uploads/" + file.filename);

    // Simpan perubahan
    const updatedHouse = await house.save();

    // Kembalikan URL gambar
    const imageUrl = `/images/${file.filename}`;
    res.status(200).json({ imageUrl }); // Mengembalikan URL gambar sebagai respons
  } catch (error) {
    console.error("Error uploading image to house:", error);
    res.status(500).json({ message: "Failed to upload image to house.", error });
  }
};


// Fungsi untuk menghapus gambar dari rumah berdasarkan ID
export const deleteImageFromHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { urlImage } = req.query; // Menggunakan req.query untuk mendapatkan parameter URL

    // Cek apakah rumah dengan ID yang diberikan ada
    const house = await House.findById(id);
    if (!house) {
      return res.status(404).json({ message: "House not found." });
    }

    // Cari indeks gambar yang akan dihapus
    const imageIndex = house.images.indexOf(urlImage);
    if (imageIndex === -1) {
      return res.status(404).json({ message: "Image not found in house." });
    }

    // Hapus gambar dari daftar
    house.images.splice(imageIndex, 1);

    // Simpan perubahan
    const updatedHouse = await house.save();

    res.status(200).json(updatedHouse);
  } catch (error) {
    console.error("Error deleting image from house:", error); // Menambahkan log pesan kesalahan
    res.status(500).json({ message: "Failed to delete image from house.", error });
  }
};

