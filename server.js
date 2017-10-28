const serve = require('serve');
const PORT = process.env.PORT || 8080;

const server = serve(__dirname, {
  port: PORT,
  ignore: ['node_modules'],
  single: 'build'
});
