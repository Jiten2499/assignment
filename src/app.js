const express = require('express');
const connectDB = require('./db');
const insertDataRoute = require('./routes/insertDataRoute');
const itemRoutes = require('./routes/apiRoutes');
const cors=require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
connectDB(); // Connect to MongoDB
console.log("app.use2")
//app.use('/api/insertData', insertDataRoute);
app.use('/api', itemRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
