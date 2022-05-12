const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const ArtworkModel = require('./models/Artwork');


// MONGODB DATABASE CONNECTION

mongoose.connect('mongodb+srv://testuser:testuser12345@artworks.5abde.mongodb.net/artworkdatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

// APP USE
app.use(express.json());
app.use(cors());


// APP GET
app.get('/read', async (req, res) =>{

    ArtworkModel.find({},(err, result) =>{
        if (err){
            res.send(err)
        }
        res.send(result)
    })
})

// APP LISTEN
app.listen(3001, () =>{
    console.log("Server is running... Run after it!")
});