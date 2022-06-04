import React from "react";
import "./ShoutsFeed.css";
import ShoutInList from "./shout-in-list/ShoutInList";
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';

export default function ShoutsFeed() {
  // const mockedData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const heights = [600, 450, 250, 500, 600, 350, 250, 500, 450, 500, 350, 650, 400, 500, 700];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(12, 11, 40, 0.9)',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div className="shouts-feed-container">
      <Masonry columns={3} spacing={1}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
      {/* {mockedData.map(() => {
        return <ShoutInList></ShoutInList>;
      })} */}
    </div>
  );
}
