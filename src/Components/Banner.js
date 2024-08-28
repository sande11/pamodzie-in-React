import React, { useState, useEffect } from "react";
import '../styles/MainContainer.css';
import Artistl from "../img/artistl.jpg";
import { FaEllipsisH, FaHeadphones } from "react-icons/fa";

function Banner() {
    // Define the banner data
    const banners = [
        {
            title: "Featured Artist: Lunatic",
            subtitle: "Stream the Latest Hits Now!",
            details: "10,900,098 Total Downloads | New Album: [Album Name]",
            imgSrc: Artistl
        },
        {
            title: "Get Premium Access",
            subtitle: "Unlimited Music, Ad-Free Streaming",
            details: "Sign Up Now and Enjoy 30 Days Free!",
            imgSrc: Artistl
        },
        {
            title: "New Music Friday",
            subtitle: "Discover the Latest Tracks",
            details: "Curated Playlists Updated Weekly",
            imgSrc: Artistl
        },
        {
            title: "Top Hits Playlist",
            subtitle: "The Most Played Tracks of the Week",
            details: "Over 1 Million Streams",
            imgSrc: Artistl
        },
        {
            title: "Artist Spotlight: Lunatic",
            subtitle: "Listen to the Hits That Made Them Famous",
            details: "Exclusive Interviews and More",
            imgSrc: Artistl
        }
    ];

    // Randomly pick a banner initially
    const [currentBannerIndex, setCurrentBannerIndex] = useState(Math.floor(Math.random() * banners.length));

    // Function to change the banner
    const changeBanner = () => {
        setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    };

    // Use effect to set up the interval for changing banners
    useEffect(() => {
        const interval = setInterval(changeBanner, 30000); // Change every 30 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    const currentBanner = banners[currentBannerIndex];

    return (
        <div className="banner">
            <img src={currentBanner.imgSrc} alt="Artist" className="bannerImg" />

            <div className="content">
                <div className="breadCrumb">
                    <p style={{marginTop:"-300px"}}>
                        <span>Home</span>
                    </p>
                    <i style={{marginTop:"-300px", color:"#fff"}}><FaEllipsisH /></i>
                </div>

                <div className="artist">
                    <div className="left">
                        <div className="name">
                            <h2>{currentBanner.title}</h2>
                            {/* <img src={currentBanner.imgSrc} alt="Artist" width="30" style={{ marginLeft: 10 }} /> */}
                        </div>
                        <p><i><FaHeadphones /></i> {currentBanner.details}</p>
                    </div>
                    <div className="right">
                        <a href="#">Play</a>
                    </div>
                </div>
            </div>
            <div className="bottomLayer"></div>
        </div>
        
    );
}

export { Banner };
