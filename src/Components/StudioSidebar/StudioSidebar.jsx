import React from "react";
import {
  AnalyticsOutlined,
  AttachMoneyOutlined,
  AutoFixHighOutlined,
  CommentOutlined,
  CopyrightOutlined,
  FeedbackOutlined,
  Home,
  MusicVideoOutlined,
  SettingsOutlined,
  SubtitlesOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./StudioSidebar.css";

const StudioSidebar = () => {
  return (
    <aside className="StudioSide">
      <div className="UserChannel">
        <div className="UserImg">
          <Avatar className="StdAvatar" />
        </div>
        <div className="UserTitle">
          <h3>your channel</h3>
          <h2>moyssar magdi</h2>
        </div>
      </div>
      <ul>
        <li className="active">
          <Home className="SideIcon" />
          <span> dashboard</span>
        </li>
        <li>
          <VideoLibraryOutlined className="SideIcon" />
          <span> content</span>
        </li>
        <li>
          <AnalyticsOutlined className="SideIcon" /> <span> analytics</span>
        </li>
        <li>
          <CommentOutlined className="SideIcon" />
          <span> commments</span>
        </li>
        <li>
          <SubtitlesOutlined className="SideIcon" />
          <span> subtitles</span>
        </li>
        <li>
          <CopyrightOutlined className="SideIcon" />
          <span> copyright</span>
        </li>
        <li>
          <AttachMoneyOutlined className="SideIcon" />
          <span>earn</span>
        </li>
        <li>
          <AutoFixHighOutlined className="SideIcon" />
          <span> customisation</span>
        </li>
        <li>
          <MusicVideoOutlined className="SideIcon" />
          <span> audio library</span>
        </li>
      </ul>
      <div className="Setbtns">
        <a href="/#" className="Setbtn">
          <SettingsOutlined />
          <span>settings</span>
        </a>
        <a href="/#" className="Setbtn">
          <FeedbackOutlined />
          <span>feedback</span>
        </a>
      </div>
    </aside>
  );
};

export default StudioSidebar;
