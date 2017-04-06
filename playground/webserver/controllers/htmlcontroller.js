const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    // use express path variables to dynamically match ids to routes
    app.get('/person/:id', function(req, res) {
        res.render('person', {
            ID: req.params.id,
            Qstr: req.query.qstr
        });
    });

    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thanks!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}
