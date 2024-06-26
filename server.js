import app from "./app.js";
import dotenv from "dotenv";


app.get("/", (req, res) => {
    res.send("Hello World");
});


dotenv.config({ path: "./config/config.env" });




app.listen(process.env.PORT || "3000", () => {
    console.log("Server listening on port ",process.env.PORT);
});
