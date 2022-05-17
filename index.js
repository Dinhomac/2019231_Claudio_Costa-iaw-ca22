const app = require('./app');
require('./db');

// heroku server expects process to set the port like this, using a random port
app.listen(process.env.PORT);
console.log('Server on port 3001');