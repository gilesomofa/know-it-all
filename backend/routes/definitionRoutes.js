const express = require('express');
const router = express.Router();


router.get('/get/:id',(req,res) => {
  let id = req.params.id;
  res.send(id);
})
router.post('/post', (req,res) => {
  res.send('definition posted');

});


module.exports = router;