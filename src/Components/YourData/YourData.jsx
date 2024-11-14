import React from 'react'
import './YourData.css';
import { Avatar } from '@mui/material';
import { AccountCircleOutlined, BallotOutlined, CheckCircle, ChevronRight, CommentOutlined, DoNotDisturbOnRounded, Download, GppGood, GppGoodOutlined, PlayCircleFilled, SubscriptionsOutlined } from '@mui/icons-material';

const YourData = () => {
  return (
    <>
      <div className="DataNav">
        <h2>Your data in YouTube</h2>
        <div className="User"><Avatar/></div>
      </div>
      <div className="container">
        <p className='Title'>Browse or delete your YouTube activity, and discover how your data makes YouTube and other Google services work better for you</p>
        <div className="ImgContainer">
          <img src="//www.gstatic.com/identity/boq/privacyadvisor/yt_pa_top_header_2x-8996019022e575c191b764f877a31cfa.png" alt="" />
        </div>
          <div className="YourDashboard">
            <h2>Your YouTube dashboard</h2>
            <p>Your YouTube content appears here. Examples of content include videos that you've uploaded, comments that you've made on videos, and channels that you've subscribed to.</p>
            <div className="DashSubs">
              <span><i><SubscriptionsOutlined/></i><p style={{display:"inline-block"}}>146</p> subscribtions</span>
              <span>(private)</span>
            </div>
            <div className="DashComnt">
              <span><i><CommentOutlined/></i><p style={{display:"inline-block"}}>10</p> comments</span>
            </div>
            <div className="DashBtn">
              <button className="DaownloadBtn"><i><Download/></i><span>Download YouTube data</span></button>
            </div>
          </div>
        <div className="contrals">
          <div className="ImgContainer">
            <img src="//www.gstatic.com/identity/boq/privacyadvisor/yt_pa_youtube_controls_header_2x-ceee8a1522284ab0d72be6f929e0fd80.png" alt="" />
          </div>
          <h2 className='SecTitles'>YouTube contrals</h2>
          <p className='SecPs'>Your YouTube activity is saved in your Google Account. Examples of your activity include your watch and search history.</p>
        </div>
        {/* ******************* */}
        <div className="History">
          <div className="WatchHistory">
            <h2 className='MainTitles'>YouTube Watch History</h2>
            <button className='MainOnBtn'><i><CheckCircle className='Check'/></i><span>On</span><i className='ChevRight'><ChevronRight/></i></button>
            <p className='MainPs'>Makes it easier to find YouTube videos that you've watched and improves your recommendations in YouTube and in other Google services, like Search</p>
            </div>
            <div className="Frame">
              <h2>Your recent history</h2>
              <div className="Watched">
                <div className="WatchedTxt">
                <p>Watched <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>Using Notion API With React to Create a Notion Database</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="WatchDate">17 October 2023 • 01:56</span>
                </div>
                <div className="WatchedVid">
                  <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>
                    <img src="https://i.ytimg.com/vi/WbekTHVISh0/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                    </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div>
              </div>
              <div className="Watched">
                <div className="WatchedTxt">
                <p>Watched <a href='https://www.youtube.com/watch?v=ec5m6t77eYM'>Notion API – Full Course for Beginners</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="WatchDate">17 October 2023 • 01:56</span>
                </div>
                <div className="WatchedVid">
                <a href='https://www.youtube.com/watch?v=ec5m6t77eYM'>
                  <img src="https://i.ytimg.com/vi/ec5m6t77eYM/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div>
              </div>
              <div className="Watched">
                <div className="WatchedTxt">
                <p>Watched <a href='https://www.youtube.com/watch?v=hbxQw4LQwws'>How to use Notion - Beginner Tutorial</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="WatchDate">17 October 2023 • 01:56</span>
                </div>
                <div className="WatchedVid">
                <a href='https://www.youtube.com/watch?v=hbxQw4LQwws'>
                  <img src="https://i.ytimg.com/vi/hbxQw4LQwws/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div>
              </div>
              <a href="/#">Manage your YouTube Watch History</a>
            </div>
        </div>
        <div className="History">
          <div className="SearchHistory">
            <h2 className='MainTitles'>YouTube Search History</h2>
            <button className='MainOnBtn'><i><CheckCircle className='Check'/></i><span>On</span><i className='ChevRight'><ChevronRight/></i></button>
            <p className='MainPs'>Seaves your searches on YouTube to majke your future searches faster and improve your recommendations</p>
          </div>
          <div className="Frame">
            <h2>Your recent history</h2>
            <div className="Searched">
                <div className="SearchedTxt">
                <p>Searched for <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>Using Notion API With React to Create a Notion Database</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="SearchDate">17 October 2023 • 01:56</span>
                </div>
                {/* <div className="WatchedVid">
                  <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>
                    <img src="https://i.ytimg.com/vi/WbekTHVISh0/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                    </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div> */}
              </div>
            <div className="Searched">
                <div className="SearchedTxt">
                <p>Searched for <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>Using Notion API With React to Create a Notion Database</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="SearchDate">17 October 2023 • 01:56</span>
                </div>
                {/* <div className="WatchedVid">
                  <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>
                    <img src="https://i.ytimg.com/vi/WbekTHVISh0/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                    </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div> */}
              </div>
            <div className="Searched">
                <div className="SearchedTxt">
                <p>Searched for <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>Using Notion API With React to Create a Notion Database</a></p>
                <h6 className='ChanName'>code with Nomi</h6>
                <span className="SearchDate">17 October 2023 • 01:56</span>
                </div>
                {/* <div className="WatchedVid">
                  <a href='https://www.youtube.com/watch?v=WbekTHVISh0'>
                    <img src="https://i.ytimg.com/vi/WbekTHVISh0/mqdefault.jpg?at=AMf-hCYSk2pA_S_llaA3s0ic7OHF%3A1697633780654" alt="" />
                    </a>
                  <PlayCircleFilled className='PlayBtn' />
                </div> */}
              </div>
            <a href="/#">Manage your YouTube Search History</a>
          </div>
        </div>
        <div className="VoiceSearch">
          <h2 className='MainTitles'>YouTube voice search</h2>
          <button className='MainOnBtn'><i><DoNotDisturbOnRounded className='Stopped'/></i><span>Paused</span><i className='ChevRight'><ChevronRight/></i></button>
          <p className='MainPs'>Seves your YouTube voice searches</p>
        </div>
        {/* Google-Wide Info And Contrals */}
        <div className="ImgContainer">
            <img src="//www.gstatic.com/identity/boq/privacyadvisor/yt_pa_google_controls_header_2x-ad191d5f52d507cd3587bc86cfb48e6e.png" alt="" />
          </div>
        <div className="googleInfo">
          <h2 className="SecTitles">Google-wide info and contrals</h2>
          <p className="SecPs">Your activity across Google can affect your experience on YouTube. Google Account controls let you decide what activity data is seved and used</p>
          <div className="Borderd">
            <h2 className="MainTitles">Web & App Activity</h2>
            <button className='MainOnBtn '><i><CheckCircle className='Check'/></i><span>On</span><i className='ChevRight'><ChevronRight/></i></button>
            <p className="MainPs">Seves your activity on Google sites. apps and services. including your searches and associated info like location</p>
              <a href="/#" className='SeeAndDelete'>See and delete activity</a>
          </div>
        </div>
        <div className="Borderd">
          <h2 className="MainTitles">Location History</h2>
          <button className='MainOnBtn '><i><DoNotDisturbOnRounded className='Stopped'/></i><span>Off</span><i className='ChevRight'><ChevronRight/></i></button>
          <p className="MainPs">Seves where your go devices, even when you aren't using a specific Google service, to give you personalised maps, recommendations based on places that you've visited and more</p>
              <a href="/#" className='SeeAndDelete'>See and delete activity</a>
        </div>
        {/* Personalised ads */}
        <div className="Borderd">
          <h2 className="MainTitles">Personalised ads</h2>
          <p className="MainPs">You can choose whether the ads that you see on google services and partner sites are personalised</p>
          <h5 className="PersonTitles">My Ad Center</h5>
          <button className='MainOnBtn '><i><CheckCircle className='Check'/></i><span>Personalised ads - on</span><i className='ChevRight'><ChevronRight/></i></button>
          <h5 className="MainPs" style={{borderBottom: "1px solid #ddd",paddingBottom:"20px"}}>Options for ads on Google services like YouTube</h5>
          <h6 className="PersonTitles">Partner ads Settings</h6>
          <button className='MainOnBtn' style={{borderBottom: "1px solid #ddd",paddingBottom:"20px"}}><span>Options for ads on sites that partner with Google</span><i className='ChevRight'><ChevronRight/></i></button>
          <div className="Protect">
            <i><GppGood className='Shield'/></i>
            <p className='MainPs'>We protect your privacy. Content from Drive, Gmail and Photo is never usedvfor any ads purposes. <a href="/#">Learn more in the Safety Center</a></p>
          </div>
        </div>
        {/* How YouTube Worksd With Your Data */}
        
        <div className="DataWorks">
          <div className="ImgContainer">
            <img src="//www.gstatic.com/identity/boq/privacyadvisor/yt_pa_feature_card_header_2x-6257bd467ebc553dcca2d6367af4897b.png" alt="" />
          </div>
          <h2 className="SecTitles">How YouTube work with your data</h2>
          <p className="SecPs">Learn more about your privacy controls and how YouTube works with your data.</p>
          <div className="Grid2">
            <div className="Borderd">
              <div className="DataImgs">
                <img src='Images/yt_pa_location_v3.png' alt="" />
              </div>
              <h2 className='DataTxt'>How YouTube users location data</h2>
            </div>
            <div className="Borderd">
              <div className="DataImgs">
                <img src='Images/yt_pa_recommends_v3.png' alt="" />
              </div>
              <h2 className='DataTxt'>How YouTube recommends videos</h2>
            </div>
            <div className="Borderd">
              <div className="DataImgs">
                <img src='Images/yt_pa_notifications_v3.png' alt="" />
              </div>
              <h2 className='DataTxt'>How to manage notifications and sharing</h2>
            </div>
            <div className="Borderd">
              <div className="DataImgs">
                <img src='Images/yt_pa_other_v3.png' alt="" />
              </div>
              <h2 className='DataTxt'>Other YouTube apps and your data</h2>
            </div>
          </div>
        </div>
        {/* more Options */}
        <div className="MoreOptions">
          <div className="ImgContainer">
            <img src="//www.gstatic.com/identity/boq/privacyadvisor/yt_pa_more_header_2x-0f4120d54fbac02a1e9faca53a07c0a0.png" alt="" />
            <h2 className="SecTitles">More options to manage your privacy</h2>
          </div>
          <div className="Grid3">
            <div className="Borderd">
              <div className="Grid3Top">
                <i><AccountCircleOutlined className='ic'/></i>
                <h2 className="icTitle">google account</h2>
              </div>
              <p className="MainPs">Manage your info, privacy and security to make Google work better for you</p>
            </div>
            <div className="Borderd">
              <div className="Grid3Top">
                <i><GppGoodOutlined className='ic'/></i>
                <h2 className="icTitle">safety center</h2>
              </div>
              <p className="MainPs">explore what we do to help keep you safe</p>
            </div>
            <div className="Borderd">
              <div className="Grid3Top">
                <i><BallotOutlined className='ic'/></i>
                <h2 className="icTitle">privacy policy</h2>
              </div>
              <p className="MainPs">Understand what data Google collects, why and how you can manage your data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default YourData