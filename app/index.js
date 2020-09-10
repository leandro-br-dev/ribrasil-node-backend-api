const express   = require('express'),
      sequelize = require('sequelize'),
      routes    = require('./routes'),
      cors      = require('cors');

const port      = 3333; //porta padrão Node.JS
const app       = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
