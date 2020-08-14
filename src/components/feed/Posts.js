import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Posts.css';

const Posts = ({ displayName, username, verfied, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar href="../images/avatar.png" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>Soumyadeep Sinha <span>
              <VerifiedUserIcon className="post_badge" />
            </span>
            </h3>
          </div>
          <div className="post_headerDrescription">
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quaerat, enim.</p>
          </div>
          <img src="https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif" alt="GIF" />
        </div>
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Posts