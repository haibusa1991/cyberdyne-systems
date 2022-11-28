// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// express()
//   .use(express.static(path.join(__dirname, '/dist/cyberdyne-systems')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/cyberdyne-systems'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/cyberdyne-systems/index.html'));});
app.listen(process.env.PORT || 8080);
