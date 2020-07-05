import React, { useEffect, useState } from "react";
import Moment from "moment";
import { Link } from "react-router-dom";

const Feed = ({ match }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`https://instafeed-server.herokuapp.com//${match.params.id}`);
    const data = await response.json();
    setFeed(data);
  };

return (
    <React.Fragment>
        <Link to="/" className="back-link">Back</Link>
      <div className="container feed-container">
        <div className="img-div">
          <img src={feed.mediaUrl} className="img feed-img" alt={feed.mediaId} />
        </div>
        <div className="text-div">
          <p className="username">{feed.username}</p>
          <p className="date">{Moment(feed.timestamp).format("LL")}</p>
          <p className="caption">{feed.caption}</p>
          <a href={feed.permalink} target="_blank" className="insta-link">
            See on Insta
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feed;
