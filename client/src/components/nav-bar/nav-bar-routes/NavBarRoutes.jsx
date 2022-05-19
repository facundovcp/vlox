import React from "react";
import "./NavBarRoutes.css";
import HomeIcon from "./navbar-icons/HomeIcon";
import PostsIcon from "./navbar-icons/PostsIcon";
import ShoutsIcon from "./navbar-icons/ShoutsIcon";
import MyContentIcon from "./navbar-icons/MyContentIcon";
import NotificationIcon from "./navbar-icons/NotificationIcon";
import MessagesIcon from "./navbar-icons/MessagesIcon";
import SearchIcon from "./navbar-icons/SearchIcon";
import HideContentIcon from "./navbar-icons/HideContentIcon";
import ProfileIcon from "./navbar-icons/ProfileIcon";
import WalletIcon from "./navbar-icons/WalletIcon";
import AchievementIcon from "./navbar-icons/AchievementIcon";
import QuestIcon from "./navbar-icons/QuestIcon";
import RankIcon from "./navbar-icons/RankIcon";
import RadioIcon from "./navbar-icons/RadioIcon";
import GraveIcon from "./navbar-icons/GraveIcon";
import LogOutIcon from "./navbar-icons/LogOutIcon";

export default function NavBarRoutes() {
  return (
    <div className="nav-bar-routes-container">
      <HomeIcon></HomeIcon>
      <PostsIcon></PostsIcon>
      <ShoutsIcon></ShoutsIcon>
      <MyContentIcon></MyContentIcon>
      <NotificationIcon></NotificationIcon>
      <MessagesIcon></MessagesIcon>
      <SearchIcon></SearchIcon>
      <HideContentIcon></HideContentIcon>
      <ProfileIcon></ProfileIcon>
      <WalletIcon></WalletIcon>
      <AchievementIcon></AchievementIcon>
      <QuestIcon></QuestIcon>
      <RankIcon></RankIcon>
      <RadioIcon></RadioIcon>
      <GraveIcon></GraveIcon>
      <LogOutIcon></LogOutIcon>
    </div>
  );
}
