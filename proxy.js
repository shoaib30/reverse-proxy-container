var proxy = require('express-http-proxy');

/* GET Proxy. */
var customcProxyMiddleware = function(pathPrefix, endpoint) {
	console.log('custom proxy: ' + endpoint);
	return proxy(endpoint, {
		forwardPath: function (req) {
			var path = req.originalUrl.replace(pathPrefix, '');
			console.log('proxying to:', endpoint + path);
			return path;
		},
	});
};

module.exports = customcProxyMiddleware;
