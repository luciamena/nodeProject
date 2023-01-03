
const mongoose = require('mongoose');
//mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);

mongoose.connect(process.env.URI, {})
    .then(console.log("Database connected."))
    .catch(e => console.log(`ERROR: ${e}`));
