import React from 'react'
import { useEffect } from 'react'

function WatchList({ watchlist }) {

  useEffect(() => {
    console.log(`watchlist: |${watchlist}|`)
  }, [])

  // watchlist contains an array of movie objects
  const renderWatchlist = () => {
    return (
      <div className="watchlist-display">
        {Object.values(watchlist).map((mov) => {
          <div className="watchlist-item">
            {mov && mov.Title}
          </div>
        })}
      </div>
    )
  }

  return (
    <div className="watch-list">
      {watchlist && watchlist != '' && !console.log(`wl:${JSON.stringify(watchlist)}`)
        ? renderWatchlist()
        : <img className="watchlist-display" src="logo512.png" width="50px" />}
    </div>
  )
}

export default WatchList