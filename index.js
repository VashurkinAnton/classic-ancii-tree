var chalk = require("chalk");
var chanks = {
	"more": "├",
	"gap": "│  ",
	"last": "└",
	"label": "─ "
};

module.exports = function CAT(ast, options){
	var isRoot = !options;
	if(!options){ options = {}; }
	if(!options.prefix) options.prefix = [];

	var color = ast.color ? chalk[ast.color] : null, row = [];
	if(color instanceof Function){
		ast.label = color(ast.label || '');
	}
	ast.label = options.prefix.join('') + (chanks[options.chank] ? chanks[options.chank] + chanks['label'] : '') + ast.label;
	row.push(ast.label);

	if(ast.nodes){
		if(!isRoot){
			if(options.chank === 'last'){
				options.prefix.push('   ');
			}else{
				options.prefix.push(chanks['gap']);
			}
		}
		for(var i = 0; i < ast.nodes.length; i++){
			options.chank = i === ast.nodes.length - 1 ? 'last' : 'more';
			row.push(CAT(ast.nodes[i], options));
			options.prefix.pop();
		}
	}

	return row.join('\n');
};