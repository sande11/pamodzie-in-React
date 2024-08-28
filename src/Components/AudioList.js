import React, { useState } from 'react';
import { FaHeadphones, FaDownload, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Songs } from "./Songs";

function AudioList() {
  const [songsState, setSongsState] = useState([...Songs]); // create a new state with a copy of the original Songs array

  const toggleFavorite = (id) => {
    const updatedSongs = songsState.map((song) => {
      if (song.id === id) {
        return { ...song, favorite: !song.favorite };
      }
      return song;
    });
    setSongsState(updatedSongs); 
  };

  return (
    <div className='SongsContainer'>
      {
        songsState && songsState.map((song, index) => (
          <div className='songs' key={song.id}>

            <div className='count'>{`#${index + 1}`}</div>

            <div className='song'>
              <div className='imgBox'>
                <img src={song?.imgSrc} alt='Song' />
              </div>

              <div className='section'>
                <p className='spanArtist'>{song?.songName}   | <span className='spanArtist'>{song?.artist}</span></p>
                <div className='hits'>
                  <p className='hit'>
                    <i><FaHeadphones /></i>
                    95,300,321
                  </p>
                  <div className='download'>
                    <p>
                      <i><FaDownload /></i>
                      1000000
                    </p>
                  </div>
                  <p className='duration'>
                    <i><FaRegClock /></i>
                    03:49
                  </p>
                </div>
              </div>

            </div>

            <div className='favorite' onClick={() => toggleFavorite(song?.id)}>
              {song?.favorite ? <FaHeart color="#F1C40F" /> : <FaRegHeart />}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export { AudioList };
