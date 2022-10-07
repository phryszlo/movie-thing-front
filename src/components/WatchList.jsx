import React from 'react'
import { useEffect } from 'react'

function WatchList({ watchlist }) {

  // useEffect(() => {
  //   console.log(`watchlist: |${watchlist}|`)
  // }, [])

  // watchlist contains an array of movie objects
  const renderWatchlist = () => {
    watchlist.forEach(element => {
      console.log(`watchlist iteration: ${JSON.stringify(element).length}`)
    });
    return (
      <div className="watchlist-display">
        {watchlist.map((m,i) => {
          // return (<div>{mov.Title}</div>)
          const t = JSON.stringify(m.movie);
          console.log(`t = ${t}`)
          return (<div key={`watch-key-${i}`}>{m.movie.Title}</div>)

        })}
      </div>
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