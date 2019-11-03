// Require express 
var express = require("express")

// Set up express app
// Step one, create express instance 
var app = express()

// Step two, set up port
var PORT = process.env.PORT || 8080

// Step three, set up middleware 
app.use(express.urlencoded({ extended: true }))  // This brings in req.params 
app.use(express.json())  // This allows us to send and receive json 

// Step five, set up routes 

// Step four, start server 
app.listen(PORT, function () {
    console.log("App listening on port: ", PORT)
})
