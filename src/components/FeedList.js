import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GridItem from "./GridItem";
import Loading from "./Loading";

const FeedList = (props) => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://instafeed-server.herokuapp.com/");
    const data = await response.json();
    setFeeds(data);
    setLoading(false);
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="title">InstaFeed</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid">
            {feeds.map((feed, index) => {
              return (
                <Link to={`/${index}`} key={feed.mediaID} className="card">
                  <GridItem src={feed.mediaUrl} alt={feed.mediaID} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FeedList;
