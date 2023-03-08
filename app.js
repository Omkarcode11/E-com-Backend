let express = require('express');
let cors = require('cors')
let app = express();
let bodyParser = require('body-parser');
let db = require('./model/index');
let router = require('./routes/index');
const serverConfig = require('./config/server.config');

db.connection.sync({ alert: true })

app.use(cors())
app.use(bodyParser.json());
app.use(router);
app.get('/', (req, res) => {
  res.send('home');
  res.end();
});

app.listen(serverConfig.PORT, () => {
  console.log('server is running on omkar 8008....' + serverConfig.DB );
});
