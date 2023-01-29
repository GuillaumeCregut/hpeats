require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');
const corsOptions ={  
    origin: true,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  module.exports = app;
