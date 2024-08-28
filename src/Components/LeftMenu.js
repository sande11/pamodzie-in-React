import React from 'react'
import '../styles/LeftMenu.css'
import {FaEllipsisH} from "react-icons/fa"
import { BsSoundwave } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi"
import { Menu } from './Menu'
import { MenuList } from './MenuList'
import { MenuPlayList } from './MenuPlaylist'


function LeftMenu() {
  return (
    <div className='LeftMenu'>
         <div className='LogoContainer'>
            <i><BsSoundwave /></i>
            <h2>Pamodzie</h2>
            <i><span><FaEllipsisH /></span></i>
         </div>
         <div className='searchBox'>
            <input type="text" placeholder="Search for artists, songs, or albums"/>
            <i className='searchIcon'>< BiSearchAlt /></i>
         </div>

          <Menu title={'Menu'} menuObject={MenuList} />
          <MenuPlayList />
    </div>
   
  )
}

export {LeftMenu}
