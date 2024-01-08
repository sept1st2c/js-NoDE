const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple GET route
app.get("/", (req, res) => {
  res.send("Hello, this is a GET request!");
});

// Define a route with a parameter
app.get("/api/data", (req, res) => {
  const data = { message: "This is a JSON response." };
  res.json(data);
});

// Sending status
app.get("/not-found", (req, res) => {
  res.status(404).send("Page not found");
});

//Setting headers
app.get("/custom-header", (req, res) => {
  res.set("X-Custom-Header", "Custom Header Value");
  res.send("Response with a custom header");
});

// In-memory array to store text content
const textContent = [];

// Route to handle POST requests for adding text content
app.post("/add-content", (req, res) => {
  // Extract text content from the request body
  const newContent = req.body.content;

  // Validate the content (you might want to add more robust validation)
  if (!newContent) {
    // if there is an error it will send the code 400 and an error
    return res.status(400).json({ error: "Content is required" });
  }

  // Add the content to the in-memory array
  textContent.push(newContent);

  // Respond with a success message
  res.status(201).json({ message: "Content added successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
