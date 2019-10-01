const proxy = [
    {
      context: '/api',
      target: 'http://localhost:51435',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;