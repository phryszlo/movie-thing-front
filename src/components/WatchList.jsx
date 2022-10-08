import React from 'react'
import { Link } from 'react-router-dom';

import { useEffect } from 'react'

function WatchList({ watchlist, moviesearch }) {

  // useEffect(() => {
  //   console.log(`watchlist: |${watchlist}|`)
  // }, [])

  const handleClick = ({imdbID, searchTerm}) => {
    console.log(`passt id: ${imdbID}`)
    imdbID ?
    moviesearch({imdbID: imdbID})
    : searchTerm ?
      moviesearch({searchTerm: searchTerm})
      : moviesearch()
  };


  // watchlist contains an array of movie objects
  const renderWatchlist = () => {
    // watchlist.forEach(element => {
    //   console.log(`watchlist iteration: ${JSON.stringify(element).length}`)
    // });
    return (
      <div className="watchlist-display">
        {watchlist.map((m, i) => {
          let imdbID = m.movie.imdbID;
          return (
            <React.Fragment key={`watch-frag-${i}`}>
              <div
                key={`watch-key-${i}`}>
                {m.movie.Title}
              </div>
              <div className="watchlist-image-div">
                {/* <Link to={`/movie/${m.movie.imdbID}`}> */}
                {/* <a onClick={(event) => handleClick(m.movie.imdbID)}> */}
                <a onClick={() => handleClick({imdbID: imdbID})}>
                  <img src={m.movie.Poster} className="watchlist-img" />
                </a>
                {/* </Link> */}
              </div>
            </React.Fragment>
          )

        })
        }
      </div >
    )
  }

  return (
    <div className="watch-list">
      {watchlist && watchlist != ''
        ? renderWatchlist()
        : <img className="watchlist-display" src="logo512.png" width="50px" />
      }
    </div>
  )
}

export default WatchList