// module.exports = app;
const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const logger = require('./middleware/logger');
const { mongoDB } = require('./configs/db');
const routes = require('./routes/routes');

const app = express();
require('dotenv').config();

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

// middleware :cors
app.use(
    cors({
        origin: process.env.CLIENT,
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    })
);
app.use([express.json(), express.urlencoded({ extended: true }), logger]);
// middleware: session configs
app.use(
    session({
        secret: 'cat',
        saveUninitialized: true,
        resave: false,

        store: MongoStore.create({
            mongoUrl: mongoDB,
            collectionName: 'sessions',
            autoRemove: 'native',
            touchAfter: 24 * 3600,
        }),
        cookie: {
            maxAge: 2419200000,
            secure: true,
            sameSite: 'none',
        },
    })
);
app.set('trust proxy', 1);

// passport configs
app.use(passport.initialize());
app.use(passport.session());

require('./configs/passport');
require('./configs/passport.google');
require('./configs/passport.linkedin');
// route base
app.use(routes);
// wrong path error route
app.use((req, res) => {
    res.status(404).send('404 error! url does not exist');
});

// server error route
app.use((err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }

    return res.status(500).send('Something broke in server!');
});
module.exports = app;
