require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());


if(process.env.NODE_ENV ==="Production")
{
  app.use(express.static(path.join(__dirname,'/interface/public')))
  app.use("/api/products", productRoutes);
  app.get('*', (req, res) => {
res.sendfile(path.join(__dirname,'interface', 'public', 'index.html'));

  } )
}
else{
  app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
