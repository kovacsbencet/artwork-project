import React, {useState, useEffect} from "react";
import Artwork from './components/Artwork'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ArtworkDetails from "./components/ArtworkDetails";

function App() {
/* 
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [creator, setCreator] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("")
  */
  const [artworks, setArtworks] = useState([])
/*  
  const addToDatabase = () => {
    console.log(id, name, creator, description, price, image)
    
    const data = {id: id , name: name, creator: creator, description: description, price: price, image: image};

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:3001/insert", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  }
 */
  async function fetchArtworks(){

    const response = await fetch("http://localhost:3001/read")
    const responseJSON = await response.json()
    console.log(responseJSON)
    setArtworks(responseJSON)

  }

  useEffect(()=>{
    fetchArtworks()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
{/*         
          <h1>Secret Artworks</h1>
          <input type="number" name="" id="" placeholder="Add new ID to artwork." onChange={(({target}) => setId(target.value))}/>
          <input type="text" name="" id="" placeholder="Add the name of the artwork." onChange={(({target}) => setName(target.value))}/>
          <input type="text" name="" id="" placeholder="Add the creator of the artwork." onChange={(({target}) => setCreator(target.value))}/>
          <input type="text" name="" id="" placeholder="Add the description of the artwork." onChange={(({target}) => setDescription(target.value))}/>
          <input type="number" name="" id="" placeholder="Add new price to artwork." onChange={(({target}) => setId(target.value))}/>
          <input type="file" name="" id="" placeholder="Add new price to artwork." onChange={(({target}) => setId(target.value))}/>
          <button onClick={addToDatabase}>Add Artwork</button>
 */}
        {artworks.map(({_id, name, creator, description, price, image}) => <Artwork key={_id} name={name} creator={creator} description={description} price={price} image={image}/>)}
      </div>
    </BrowserRouter>
  );
}

export default App;
