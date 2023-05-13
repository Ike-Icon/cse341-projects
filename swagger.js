const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API'
  },
  host: 'cse341-projects-oalm.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFile, doc);

// Run server after it gets generated
swaggerAutogen(outputFile, endpointFile, doc).then(async () => {
  await import('./app.js');
});
