import React from 'react';
import Tweetbox from './Tweetbox';
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
    </div>
  );
}

export default Feed