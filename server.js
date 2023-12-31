const express = require('express');
require('dotenv').config(); 

const PORT = process.env.PORT || 3007;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  