const express = require('express');
const app = express();

const connectToMongo = require('./db')
var cors = require('cors')
app.use(cors())

// Database connection
connectToMongo();
app.use(express.json());
//Routers
app.use('/api/auth', require('./routes/authRoute'))
app.use('/api/note', require('./routes/noteRoute'))



//server
app.get('/', (req, res) => {
    res.send('hello mr...')
})
app.listen(8000, () => {
    console.log(`Project listening at http://localhost:8000`);
})