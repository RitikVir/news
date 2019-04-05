var cloudinary = require('cloudinary');
var key = require('../../config/key');
cloudinary.config({
  cloud_name: 'sample',
  api_key: key.cloudinary_api_key,
  api_secret: key.cloudinary_api_secret
});
