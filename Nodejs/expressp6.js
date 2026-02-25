const express = require('express');
const app = express();
const PORT = 3000;

const router = express.Router();

// Serve HTML page
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Add route
router.get("/add", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send("Please enter valid numbers");
    }

    const result = num1 + num2;
    res.send("Result = " + result);
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});