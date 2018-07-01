var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', login, (req, res, next) => {
  // console.log(req.headers['authorization'])
  res.send(req.token);
});

function login(req,res, next) {
  if ( req.headers['authorization'] ) {
    jwt.verify(req.headers['authorization'], 'fffff', function(err, decoded) {
      req.token = decoded;
    });
  } else {
    req.token = jwt.sign({ foo: 'bar' }, 'fffff');
  }
  next();
}
module.exports = router;
