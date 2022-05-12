import React, {useState, useEffect} from "react";
import Artwork from './components/Artwork'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  const [artworks, setArtworks] = useState([])
  const [input, setInput] = useState("")
  const [sortprice, setSortPrice] = useState("desc")
  const [pricebutton, setPriceButton] = useState("High to Low")
  const [sortname, setSortName] = useState("abc")
  const [namebutton, setNameButton] = useState("ABC sort")
  const [checkvalue, setCheckValue] = useState("")

  async function fetchArtworks(){

    const response = await fetch("http://localhost:3001/read")
    const responseJSON = await response.json()
    console.log(responseJSON)
    setArtworks(responseJSON)

  }

  useEffect(()=>{
    fetchArtworks()
  }, [])

  function sortPrice(){
    setArtworks([...artworks.sort((a, b) => sortprice === "desc" ? b.price - a.price : a.price - b.price)])
    setSortPrice(sortprice === "desc" ? "asc" : "desc")
    setPriceButton(pricebutton === "High to Low" ? "Low to High" : "High to Low")
  }

  function sortName(){
    setArtworks([...artworks.sort((a, b) => sortname === "abc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))])
    setSortName(sortname === "abc" ? "cba" : "abc")
    setNameButton(namebutton === "ABC sort" ? "CBA sort" : "ABC sort")
  }

  function sortCreator(){
    setArtworks(artworks.filter())
  }


  return (
    <BrowserRouter>
    <>
      <div className="App">
        <h1>Filter Artworks</h1>
        <input type="text" name="title" placeholder="Search by title..." value={input} onChange={({target}) => {setInput(target.value)}}/>
        <div className="creatorFilter">
          <input onChange={({target}) => {console.log(target.value)}} type="checkbox" id="joemama" name="joemama" value="joemama"/>
          <label for="joemama">Joe Mama</label>
          <input type="checkbox" id="bendover" name="bendover" value="bendover"/>
          <label for="bendover">Ben Dover</label>
          <input type="checkbox" id="mikeoxlong" name="mikeoxlong" value="mikeoxlong"/>
          <label for="mikeoxlong">Mike Oxlong</label>
        </div>
        <button onClick={sortName}>{namebutton}</button> 
        <button onClick={sortPrice}>{pricebutton}</button> 
        {artworks.map(({_id, name, creator, description, price, image}) => 
        (name.toLowerCase().includes(input.toLowerCase()) && 
        <Artwork key={_id} name={name} creator={creator} description={description} price={price} image={image}/>))}
      </div>
    </>
    </BrowserRouter>
  );
}

export default App;
