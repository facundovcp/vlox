import React from "react";
import "./ShoutsFeed.css";
import ShoutInList from "./shout-in-list/ShoutInList";

export default function ShoutsFeed() {
  const mockedData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="shouts-feed-container">
      {mockedData.map(() => {
        return <ShoutInList></ShoutInList>;
      })}
    </div>
  );
}
