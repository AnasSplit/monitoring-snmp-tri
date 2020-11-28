const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/monitoring-snmp-tri'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/monitoring-snmp-tri/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
