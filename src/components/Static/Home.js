import React from 'react'

import Feed from '../Feed/Feed'

import './Static.css'

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">

        </div>

        <div className="col-4">
          <h1 className="type">CHALLENGE</h1>
          <h3 className="type">FOR PERSONAL GROWTH AND TEAM CHALLENGES</h3>
        </div>

        <div className="col-4">

        </div>

      </div>

      <div class="row">
        <div className="col-4">

        </div>

        <div className="col-4">
          <Feed />
        </div>

        <div className="col-4">

        </div>

      </div>
    </div>
  )
}

export default Home
