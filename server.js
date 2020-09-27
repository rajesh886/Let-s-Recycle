const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/reward', require('./routes/api/rewards'));
app.use('/api/requests', require('./routes/api/requests'));
app.use('/api/contacts', require('./routes/api/contacts'));

// //Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));