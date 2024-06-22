const sharp = require("sharp");
const {uploadBuffer} = require("./cloudinaryUpload");

async function sharpenImage(image,width, height,imagePathCloudinary){
    const buffer = await sharp(image.path)
    .resize(width, height)
    .toBuffer();
    
    const result = await uploadBuffer(buffer,image.path,process.env.UPLOAD_PRESET,imagePathCloudinary)
    return result 

}

module.exports = {sharpenImage}