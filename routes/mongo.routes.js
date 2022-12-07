const express = require('express');
const router = express.Router();
const ope = require('child_process');

const abrir = ()=> {
      ope.spawn('cmd', ['/c', 'start C:\\mongosh-1.6.0-win32-x64\\bin\\mongosh'])
}

router.get('/', (req, res)=>{
      res.render('inicio');
});
router.get('/comands', (req, res)=>{
      res.render('david');
});

router.get('/practic', (req, res)=>{
      res.render('luis');
});

router.get('/practiccs', (req, res)=>{
      res.render('edwar');
});

router.get('/practic2',(req, res)=>{
      res.render('prueba');
});

router.get('/practicc',(req, res)=>{
      res.render('prueba2', abrir());
});


module.exports = router;