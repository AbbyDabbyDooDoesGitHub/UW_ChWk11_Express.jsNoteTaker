// NEED TO WRITE SERVER SCRIPT


// REQUIRE EXPRESS.JS
const express = require("express");
// USE EXPRESS WHEN APP VARIABLE IS CALLED
const app = express();
// CREATE PATH FOR ROUTER FILES
const routes = require("./routes");
// SET LOCAL PORT LOCATION
const PORT = process.env.PORT || 3001;


// const path = require('path');
// const session = require('express-session');


// const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);




// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {
//     maxAge: 60 * 60 * 1000,
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () =>
//     console.log(`Now listening: http://localhost:${PORT}`)
//   );
// });
