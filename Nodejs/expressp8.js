const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000;

// Middleware
app.use(express.json());

// Get user details
app.get("/user/:id", async (req, res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "User not found" });
    }
});

app.get("/post", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Post not found" });
    }
});
// Start server
app.listen(PORT, () => {
    console.log("Server is Running on port " + PORT);
});