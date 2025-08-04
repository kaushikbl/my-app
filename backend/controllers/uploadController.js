const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const uploadImage = (req, res) => {
  res.json({ filename: req.file.filename, path: `/uploads/${req.file.filename}` });
};

module.exports = { upload, uploadImage };

