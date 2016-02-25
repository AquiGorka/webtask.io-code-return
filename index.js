module.exports = function (ctx, req, res) {
	var code = ctx.data.code || 200;
	res.writeHead(code, {'Content-Type': 'text/plain'});
	res.end();
};