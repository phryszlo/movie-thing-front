import './App.css';
import './style.css';
import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import WatchList from './components/WatchList';
// import dotenv from 'dotenv'

function App() {

  const [watchList, setWatchList] = useState([])

  const apiKey = 'e3cb8ca0'

  const [movie, setMovie] = useState(null)

  useEffect(() => {

    getMovie('buffy the vampire');
  }, [])

  // 🔸🔸🔸
const addToWatchList = (mov) => {
  // console.log(`add fn : ${JSON.stringify(mov)}`);
  setWatchList((prev) => 
    [...prev, {"movie": mov}]
    );
}

  // 🔸🔸🔸
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`

      // `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${searchTerm}`

    );
    const data = await response.json();
    // setMovie((data) => data);
    setMovie(data)
    console.log(`movie: ${JSON.stringify(movie)}`)
  };


  // 🟢🟢🟢
  return (
    <div className="App">
      <WatchList watchlist={watchList}/>
      <MovieDisplay movie={movie} addtolist={addToWatchList} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App;
