import {
  History,
  Home,
  SmartDisplayOutlined,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="HomeSidebar">
      <ul>
        <li className="active">
          <Home />
          <span>home</span>
        </li>
        <li>
          <SubscriptionsOutlined />
          <span>subscripes</span>
        </li>
        <li>
          <History />
          <span>history</span>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <VideoLibraryOutlined />
          <span>library</span>
        </li>
        <li>
          <SmartDisplayOutlined />
          <span>your videos</span>
        </li>
        <li>
          <WatchLaterOutlined />
          <span>watch later</span>
        </li>
        <li>
          <ThumbUpAltOutlined />
          <span>liked videos</span>
        </li>
      </ul>
      <hr />
    </aside>
  );
};

export default Sidebar;
