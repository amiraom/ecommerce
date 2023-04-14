const express= require ('express');
var app = express();

const { addProduct, updateProduct, listProduct, deleteProduct } = require('../controllers/adminController');
const {isAuthenticate } = require('../middelware/isAuth');
const {notFound ,errorHandler} = require('../middelware/Errors');
const productRoutes =express.Router();
const multer = require ('multer');
const storage = multer.diskStorage({destination: (req,file,cb)=>{
    cb(null,'../front-end/public');
},
filename:(req,file,cb)=> {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g,'-')}`;
    cb(null,fileName);
}
});
const  upload = multer({storage}).single('im');



productRoutes.post('/addProduct',upload,addProduct);
productRoutes.put('/updateProduct/:id',isAuthenticate,updateProduct);
productRoutes.get('/listProduct',listProduct);
productRoutes.delete('/deleteProduct/:id',isAuthenticate,deleteProduct)
productRoutes.post('/uploads', upload,(req,res)=>{
const {file} = req;
res.send({
    file: file.originalname,
    path: file.path,
})

})

module.exports = productRoutes;