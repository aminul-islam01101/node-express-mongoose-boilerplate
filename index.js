const mongoose = require('mongoose');
require('dotenv').config();
const colors = require('colors');
const app = require('./app');
const { connectDataBase } = require('./configs/db');

const port = process.env.PORT;

colors.setTheme({
    info: 'green',
    help: 'cyan',
    warn: 'yellow',
    error: 'red',
});

// const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtbllhc.mongodb.net/Remo?retryWrites=true&w=majority`;
// mongoose.connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Database connected');

// })
// app.listen(port, () => {
//   console.log(`App is running on port ${port}`.yellow.bold);
// });

async function startServer() {
    try {
        await connectDataBase();

        app.listen(port, () => {
            console.log(`App is running on port ${port}`.yellow.bold);
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

startServer();
