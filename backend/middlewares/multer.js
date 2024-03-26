const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req ,file , next) =>{
        next(null, './uploads')
    },
    filename :(req ,file , next) =>{
        const uniqueName = Date.now() +"-"+ file.originalname;  
        next(null , uniqueName)
    }
})

const upload = multer({storage});

module.exports =upload;