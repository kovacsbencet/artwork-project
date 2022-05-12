const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const ArtworkModel = require('./models/Artwork');

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://testuser:testuser12345@artworks.5abde.mongodb.net/artworkdatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})


app.post('/insert',  async (req, res) =>{

    const artworkID = req.body.id
    const artworkName = req.body.name
    const artworkCreator = req.body.creator
    const artworkDescription = req.body.description
    const artworkPrice = req.body.price
    const artworkImage = req.body.image

    const artwork = new ArtworkModel({id: artworkID, name: artworkName, creator: artworkCreator, description: artworkDescription, price: artworkPrice, image: artworkImage});

    try {
        await artwork.save();
    } catch (err) {
        console.log(err);
    }
})


app.get('/read', async (req, res) =>{

    ArtworkModel.find({},(err, result) =>{
        if (err){
            res.send(err)
        }
        res.send(result)
    })
})

app.listen(3001, () =>{
    console.log("Server is running... Run after it!")
});