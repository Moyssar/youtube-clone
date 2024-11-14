import { Sensors, Upload } from '@mui/icons-material'
import React from 'react'
import './YouTubeStudio.css'
import SudioSidebar from './../StudioSidebar/StudioSidebar'
import StudioNavbar from './../StudioNavbar/StudioNavbar'

const YouTubeStudio = () => {
  return (
    <>
    <StudioNavbar/>
    <div style={{display: "flex"}}>
      <SudioSidebar/>
        <div className='main'>
            <div className="top">
                <h2>channel dashbard</h2>
                <Upload className='upload'/>
                <Sensors className='stream'/>
            </div>
            <div className="buttom">
                <div className="UploadSec">
                  <div className="img">
                    <img src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_upload_video_v3.svg" alt="" />
                  </div>
                  <div className="UploadText">
                    <p>Want to see metrics on your recent video? Upload and publish a video to get started.</p>
                    <div className="UploadButton">
                      <button>upload videos</button>
                    </div>
                  </div>
                </div>
                <div className="Analytics">
                  <h2 className="AnalyticsTitle">channel analytics</h2>
                  <div className="Subscribers">
                    <h2 className='SubscribersTitle'>current Subscribers</h2>
                    <span>0</span>
                  </div>
                  <hr />
                  <div className="Summary"></div>
                  <h2 className='SummaryTitle'>summary</h2>
                  <span className='LastTime'>last 28 days</span>
                  <div className="Views">
                    <h2>views</h2>
                    <span>0 -</span>
                  </div>
                  <div className="WatchTime">
                    <h2>watch time (hours)</h2>
                    <span>0.0 -</span>
                  </div>
                  <hr />
                  <div className="TopVideos">
                    <h2 className="TopVideosTitle">top videos</h2>
                    <span>last 48 hours · views</span>
                  </div>
                  <a href="/#">go to your channel analytics</a>
                </div>
                
                {/* in one column */}
                <div className="Ideas">
                  <div className="Idea">
                    <h3 className="IdeaTitle">ideas for you</h3>
                    <div className="txt">
                      <h2 className="Title">try effects on shorts</h2>
                      <p>Creating on YouTube Shorts is so easy your head will spin. Literally.</p>
                    </div>
                    <div className="Shorts">
                      <img src="https://www.gstatic.com/youtube/img/promos/growth/c9cad8afc69eaffd9d7b615836a22828f00bb08f21f108535d971782bcc70b7c_160x160.png" alt="" />
                    </div>
                    <a href="/#">learn more</a>
                  </div>
                  <div className="CreatorInsider">
                    <h2 className="CreatorTitle">creator instder</h2>
                    <div className="creatorImg">
                      <img src="https://www.gstatic.com/youtube/img/promos/growth/6caccb6e4adfa1f5e02cb62b5d5c9b9afc651e93da924bb9357299f5ffcb60f1_1280x720.jpeg" alt="" />
                      <div className="CreatorText">
                        <h2 className="TextTitle">this week at youtube</h2>
                        <p>Hello Insiders! Today we are covering Posts-Only Feed, Audio Descriptions for Creators with MLA and Pronouns on YouTube.</p>
                      </div>
                      <a href="/#">watch on toutube</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default YouTubeStudio