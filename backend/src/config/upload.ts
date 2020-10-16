import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, filename, callback) => {
      const fileName = `${Date.now()}-${filename.originalname}`
      
      callback(null, fileName);
    }
  })
}