import React from 'react'
import '../styles/MainContainer.css'
import { Banner } from "./Banner"
import { AudioList } from './AudioList'
import { MusicPlayer } from './MusicPlayer'


function MainContainer() {
  return (
    <div className='MainContainer'>
        <Banner /> 

        <div className='menuList'>
      	  <h2><a href='#'>Latest Singles</a></h2>
          <p><a href='#'>See All</a></p>
        </div>

        <AudioList />
        <MusicPlayer/>
    </div>
  )
}

export {MainContainer}
