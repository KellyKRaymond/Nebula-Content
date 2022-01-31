import './App.css';
import MemeCard from './components/memeCard/memeCard'
import {useEffect, useState} from 'react'
import React from 'react';
import Search from './components/search/search';

function App() {
    const [memes, setMemes] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => setMemes(res.data.memes))
    }, [])

    function handleFilter(e) {
      e.preventDefault()
      setSearch(e.target.value)
      
    }
     const filteredMemes = memes.filter(meme => meme.name.toLowerCase().includes(search.toLowerCase())).map(meme => <MemeCard key={meme.id} meme={meme.url}/>)
    console.log(filteredMemes)

  return (
    <div className="App">
      <h1> Welcome To My Memes Practice Page</h1>
      <Search placeholder='Search Memes Here...' handleFilter={handleFilter}/>
      {filteredMemes}
    </div>
  );
  }
export default App;
