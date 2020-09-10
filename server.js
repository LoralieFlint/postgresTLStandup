// import index to give the needed dependancies and endpoints
const index = require('./index.js');

// creation of server
const PORT = process.env.PORT || 5000;


// make the port run
index.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});