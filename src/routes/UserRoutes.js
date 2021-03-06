const express = require('express');
const router = express.Router();

const { checkAuthentication } = require('./../middlewares/AuthMiddlewares');

const userController = require('./../controllers/UserController');

router.get('/', checkAuthentication, userController.getUserInfo);
router.get('/:username', userController.getUserByUsername);
router.put('/', checkAuthentication, userController.updateUserInfo);
router.delete('/', checkAuthentication, userController.deleteUserInfo);
router.post('/follow', checkAuthentication, userController.followUser);
router.post('/check_availablity', userController.checkAvailablity);

module.exports = router;
