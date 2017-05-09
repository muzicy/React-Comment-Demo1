var express = require('express');
var router = express.Router();

var data = [{
          id: 1, author: 'zhangsan', text: 'this is one comment'},
          {id: 2, author: 'lisi', text: 'this is another comment'
        }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'express'});
});

router.get('/comment', function(req, res) {

	res.json({data: data});
});

router.post('/comment', function(req ,res) {
   
   
	var comment = JSON.parse(req.body.data);
	
	var len = data.length;
	comment.id = len+1;
	data.push(comment);
	console.log(comment);
	//console.log(data);
	res.json({data: data});

})

module.exports = router;
