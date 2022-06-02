import React from "react";
import "./HomePage.css";
import PostFeed from "../../components/post-feed/PostFeed";
import ShoutsFeed from "../../components/shouts-feed/ShoutsFeed";
import UserCard from "../../components/user/user-card/UserCard";
import Rank from "../../components/rank/Rank";
import PageStats from "../../components/page-stats/PageStats";
import NavBar from "../..//components/nav-bar/NavBar";
import Fade from 'react-reveal/Fade';

export default function HomePage() {
  return (
    <>
      <div className="background-image-home">
        <div className="miss-color-background">
          <div className="home-container">
            <div className="left-padding"></div>
            <div className="left-container">
              {/* <Fade left> */}
              <PostFeed></PostFeed>
              {/* </Fade> */}
            </div>
            <div className="center-container">
              <Fade top>
                <ShoutsFeed></ShoutsFeed>
              </Fade>
            </div>
            <div className="right-container">
              <div className="right-container-top">
                <div className="right-container-top-card">
                  <UserCard></UserCard>
                </div>
              </div>
              <div className="right-container-bottom">
                <div className="rank-home">
                  {/* <Fade right> */}
                  <Rank></Rank>
                  {/* </Fade> */}
                </div>
                <div className="page-stats-home">
                  {/* <Fade right> */}
                  <PageStats></PageStats>
                  {/* </Fade> */}
                </div>
              </div>
            </div>
            <div className="right-padding"></div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <NavBar></NavBar>
      </Fade>
    </>

  );
}
