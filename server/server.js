const cors = require("cors");
const express = require("express");
const app = express();

const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./config/jwt.config");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/book.routes")(app);

app.listen(8000, () => console.log("Listening on port: 8000"));