const express = require('express');
const router = express.Router();


router.post('/post', (req, res) => {
  res.send('definition posted')
});


module.exports = router;