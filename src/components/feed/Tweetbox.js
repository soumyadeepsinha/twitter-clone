import React from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@material-ui/core';

const Tweetbox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweet_input">
          <Avatar href="../images/avatar.png" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input className="tweet_imageInput" placeholder="Enter Image URL" type="text" />
        <Button className="tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox