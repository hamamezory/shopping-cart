require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
var path = require('path');
connectDB();

const app = express();

app.use(express.json());




// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../interface/build')));
  
  app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
  
// Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'../interface/build','index.html'));
  });
}
//end add this
//app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
