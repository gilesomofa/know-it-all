const express = require('express');
const router = express.Router();
const  { userLogin, userSignup, userCreateProfile, userUpdateProfile, userDeleteAccount, userGetUser }
 = require('../controllers/userController');

router.post('/login', userLogin );
router.post('/signup', userSignup);
router.post('/createprofile/:id', userCreateProfile);
router.put('/updateprofile/:id', userUpdateProfile);
router.delete('/deleteuser/:id', userDeleteAccount);
router.get('/getuser/:id', userGetUser);



module.exports = router;