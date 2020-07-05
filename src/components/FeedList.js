import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import GridItem from "./GridItem";


const FeedList = (props) => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001");
    const data = await response.json();
    setFeeds(data);
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="title">InstaFeed</h1>
        <div className="grid">
          {
                feeds.map((feed, index) => {
                return (
                        <Link to={`/${index}`} key={feed.mediaID} className="card">
                                <GridItem
                                        src={feed.mediaUrl}
                                        alt={feed.mediaID}
                                />
                        </Link>
                );
                })
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeedList;
