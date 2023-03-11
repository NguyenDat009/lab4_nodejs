require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const user = require('./users/index.js');

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: _dirname + '/views/layouts', 
    helpers: {
        json: function (context) { return JSON.stringify(context); },
    }
}));

app.get('/', async (req, res) => {
    const params = req.query;
    const userData = await User.getUsers(Number.parseInt(params.page));

    const pagination = {
        previous: userData.meta.pagination.page - 1,
        next: userData.meta.pagination.page + 1,
    }
    res.render('main', { layout: 'index', data: { users: userData.data, pagination } })
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});