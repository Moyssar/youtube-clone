import { Avatar } from "@mui/material";
import React from "react";
import "./YourChannel.css";
import { ReplyOutlined } from "@mui/icons-material";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
const YourChannel = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="YourChannel">
          <div className="Top">
            <div className="Left">
              <Avatar className="UserIcon" />
              <div className="UserDetails">
                <h2>Moyssar Magdi</h2>
                <p>
                  @moyssarmagdi3388
                  <span className="subs">No Subscribers</span>
                  <span className="vids">No Videos</span>
                </p>
                <br />
                <a href="/#About">More About This Channel &gt; </a>
              </div>
            </div>
            <div className="Right">
              <a href="/#">Customise Channel</a>
              <a href="/#">Manage Videos</a>
            </div>
          </div>
          <ul className="Navs">
            <a href="#home">HOME</a>
            <a href="#playlists">PLAYLIST</a>
            <a href="#channels">CHANNELS</a>
            <a href="#about">ABOUT</a>
          </ul>
          <div className="Tabs">
            <div className="Tab" id="home">
              <h2>Upload a video to get started</h2>
              <p>
                Start sharing your story and connecting with viewers. Videos
                that you upload will show up here.
              </p>
              <button className="Upload">Upload video</button>
              <h6>
                Learn more about <a href="/#">how to get started</a>
              </h6>
            </div>
            <div className="Tab" id="playlists">
              <h2>This Channel has no playlists.</h2>
            </div>
            <div className="Tab" id="channels">
              <h2>This channel doesn't feature any other channels.</h2>
            </div>
            <div className="Tab" id="about">
              <div className="left"></div>
              <div className="right">
                <h2>stats</h2>
                <h2>joined 7 feb 2021</h2>
                <ReplyOutlined className="share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourChannel;
