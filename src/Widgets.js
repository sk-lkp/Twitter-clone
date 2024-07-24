import React from 'react'
import "./Widgets.css";
import { TwitterTimelineEmbed,
     TwitterShareButton,
      TwitterTweetEmbed 
} from 'react-twitter-embed';
import Search from '@mui/icons-material/Search';


function Widgets() {
  return (
    <div className="widgets">
    <div className="widgets_input">
        <Search 
          className="widgets_SearchIcon"
        />
        <input placeholder="Search Twitter"
        type="text" />
        </div> 
        <div className="widgets_widgetContainer">
            <h2>What's happening?</h2>

              
            <TwitterTweetEmbed tweetId=
            {"1576810577770721285"} />
            <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="@Monstersguys5" 
            options={{height: 400}} />
            <TwitterShareButton 
                    url = {"https://facebook.com/akkyProjects"}
                    options = { { text : "Subscribe my Youtube Channel #CodeWithAkky" , via :  "akkyProjects" }}
               />
        </div>    
    </div>
  )
}

export default Widgets;
