const express = require('express');
const { createUser, getAllUser, getUserById } = require('../controllers/user.controller');

const router = express.Router();




module.exports = router;

// formate 
// router.put('/:email', createUser);
// router.get('/', getAllUser);
// router.get('/:id', getUserById);
// router.route("/bulk-update").patch(productController.bulkUpdateProduct);
/* router.route('/')
.get(productController.getProducts)
.post(productController.createProduct) */
/* router.route("/:id")
.patch(productController.updateProductById)
.delete(productController.deleteProductById) */