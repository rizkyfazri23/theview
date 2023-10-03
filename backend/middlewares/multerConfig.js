// multerConfig.js

import multer from 'multer';

// Konfigurasi Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
      // Mendapatkan ekstensi file dari originalname
      const ext = file.originalname.split('.').pop();
      
      // Membangun nama file baru dengan ekstensi
      const newFileName = `${file.fieldname}-${Date.now()}.${ext}`;
      
      callback(null, newFileName);
    },
  });

const upload = multer({ storage: storage });

export default upload;
