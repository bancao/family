'use strict'
var router = require('express').Router();
var AV = require('leanengine');

var member = AV.Object.extend('member');

router.get('/data', function(req, res, next){
	var query = new AV.Query(member);
	var root = null;
	var parent = 'parent';
	query.find().then(function(members){
		var childrenMap = {};
		members.forEach(function(item, index){
			if(item.get(parent)) {
				var children = childrenMap[item.get(parent)];
				if(!children) {
					children = new Array();
					childrenMap[item.get(parent)] = children;
				} 
				children.push(item);
			} else {
				root = item;
			}
		});

		members.forEach(function(item, index){
			var children = childrenMap[item.get(parent)];
			if(children){
				item.put('children', children);
			}
		});
		console.log(root);
		res.end(JSON.stringify(root));
	});


});

module.exports = router;