const app = require('./app');
require('./db');

app.listen(process.env.PORT);
console.log('Server on port 3001');