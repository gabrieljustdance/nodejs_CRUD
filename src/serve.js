const express = require('express');
const path = require('path');

const app = express();

//configuraciones

app.set('port', process.env.PORT || 5000);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.listen(app.get('port'), () => {
  console.log('server corriendo en el puerto 5000');
});