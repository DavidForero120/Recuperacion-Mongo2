const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
      res.render('inicio');
});
router.get('/comands', (req, res)=>{
      res.render('david');
});

router.get('/practic2', (req, res)=>{
      res.render('luis');
});

module.exports = router;