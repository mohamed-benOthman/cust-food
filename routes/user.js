const express =require('express');
const userController = require ('../controller/user')
const router=express.Router();
router.post('', userController.addUser)
router.post('/login', userController.getUser)
router.post('/sendEmail', userController.userReset)
router.post('/resetPassword', userController.resetPassword)
router.post('/checkToken', userController.checkToken)
router.get('/:userId', userController.getCordonne)
router.post('/updateWishList/:userId', userController.updateWishList)
router.post('/deleteWishList/:userId', userController.removeFromWishList);
router.post('/addToSearchList/:userId', userController.addSearchList);
router.post('/confirmToken', userController.confirmToken);
router.post('/checkConfimationToken', userController.checkConfirmToken);
router.post('/confirmUser', userController.confirmUser)

module.exports=router