const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser');
      cookieParser = require('cookie-parser'),
      path = require('path'),   
      routes = require('./routes');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api/', routes);

app.listen(process.env.PORT, () => {
   console.log(`server started listening on port ${process.env.PORT}`);
});



// PRODDUCTION
// if(process.env.NODE_ENV === 'production') {
//    app.use(express.static(path.join(__dirname,'/client/build')));
//    app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '/client/build','index.html'));
//    });
// }
