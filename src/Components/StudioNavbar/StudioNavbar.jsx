import React from 'react';
import { NavLink } from 'react-router-dom'
import { NotificationAddOutlined, Search, VideoCallOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const StudioNavbar = () => {
    let toggleUserMenu = ()=>{document.getElementById('menuToggle').toggleAttribute('active')}
  return (
    <nav className='Navbar'>
    <div className='Logo'>
        <a href='/'><img src='Images/YouTubeLogo.jpg' alt='YouTube'/></a>
    </div>
    <form className='NavSearch'>
        <input type='text' className='SearchInput' placeholder='Search' />
        <button type='submit' className='SearchBtn' onClick={(e) =>{e.preventDefault()}}><Search  className='SearchIcon'/></button>
    </form>
    <div className='NavUser'>
        <VideoCallOutlined className='VideoPlus'/>
        <NotificationAddOutlined className='Notifiactions'/>
        <Avatar className='UserAvatar'
        onClick={toggleUserMenu}
        />
        <ul className="UserSettingsUL" id='menuToggle'>
            <div className="UserInfo">
                <Avatar/>
                <div className="UserInfoText">
                    <h2>Moyssar Magdi</h2>
                    <p>@moyssarmagdi3388</p>
                    <a href='/#'>Manage Your Google Account</a>
                </div>
            </div>
            {/* NavLinks */}
            <li><NavLink to='/YourChannel'>Your Channel</NavLink></li>
            <li><NavLink to='/YouTubeStudio'>YouTube Studio</NavLink></li>
            <li><a href='/#'>Switch Account</a></li>
            <li><a href='/#'>Sign Out</a></li>
            <hr />
            <li><a href='/#'>Purchases And Memberships</a></li>
            <li><NavLink to='/YourData'>Your Data On YouTube</NavLink></li>
            <hr />
            <li><a href='/#'>Appearance: device Theme</a></li>
            <li><a href='/#'>Language: English</a></li>
            <li><a href='/#'>Restricted Mode: Off</a></li>
            <li><a href='/#'>Location: United States</a></li>
            <li><a href='/#'>Keyboard Shortcuts</a></li>
            <hr />
            <li><a href='/#'>settings</a></li>
            <hr />
            <li><a href='/#'>Help</a></li>
            <li><a href='/#'>Send Feedback</a></li>
        </ul>
    </div>
</nav>
  )
}

export default StudioNavbar