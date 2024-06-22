const cloudinary = require("../utils/cloudinary");
const fs = require("fs");

async function uploadBuffer(
    buffer,
    filePath,
    uploadPreset,
    folder
  ) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { upload_preset: uploadPreset, folder: folder },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        )
        .end(buffer);
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    return result;
  }

module.exports = { uploadBuffer }