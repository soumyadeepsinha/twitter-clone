import React from 'react';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon placeholder="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget_container">
        <h2>Whats happening</h2>
      </div>
    </div>
  )
}

export default Widgets