import React from 'react';
import Tweetbox from './Tweetbox';
import Posts from './Posts';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Tweetbox */}
      <Tweetbox />
      {/* Posts */}
      <Posts />
    </div>
  );
}

export default Feed