const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API',
    version: '1.0.0' // Add a version number
  },
  host: 'cse341-projects-oalm.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js']; // Use an array of endpoint files if you have multiple files

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
  // Import and start your server here
  require('./app');
});
