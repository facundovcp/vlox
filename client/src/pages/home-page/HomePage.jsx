import React from "react";
import "./HomePage.css";
import PostFeed from "../../components/post-feed/PostFeed";
import ShoutsFeed from "../../components/shouts-feed/ShoutsFeed";
import UserCard from "../../components/user/user-card/UserCard";
import Rank from "../../components/rank/Rank";
import PageStats from "../../components/page-stats/PageStats";
import NavBar from "../..//components/nav-bar/NavBar";

export default function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="left-padding"></div>
        <div className="left-container">
          <PostFeed></PostFeed>
        </div>
        <div className="center-container">
          <ShoutsFeed></ShoutsFeed>
        </div>
        <div className="right-container">
          <div className="right-container-top">
            <div className="right-container-top-card">
              <UserCard></UserCard>
            </div>
          </div>
          <div className="right-container-bottom">
            <div className="rank-home">
              <Rank></Rank>
            </div>
            <div className="page-stats-home">
              <PageStats></PageStats>
            </div>
          </div>
        </div>
        <div className="right-padding"></div>
      </div>
      <NavBar></NavBar>
    </>

  );
}
