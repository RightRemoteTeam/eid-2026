const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080/BT-gea-eid-2024-laravel',
            changeOrigin: true,
        })
    );
};