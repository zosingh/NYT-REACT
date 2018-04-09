// EXPRESS
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080


var theAPIs = require('./routes/api_routes')

// ...

app.use('/api/saved', theAPIs)


app.get('/', function(req, res) {
    res.send('NYT React search')
})
app.get('/api/articles', function(req, res) {
    res.send('Articles appear here!')
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`)
});

