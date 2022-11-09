const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/heroes", {
      target: "https://overfast-api.tekrop.fr",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/heroes/", {
      target: "https://overfast-api.tekrop.fr",
      changeOrigin: true,
    })
  );
  app.use(
      createProxyMiddleware("/gamemodes",
      {
          target: 'https://overfast-api.tekrop.fr',
          changeOrigin: true
      })
  )
};
