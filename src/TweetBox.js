import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css";
import db from './firebase'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Shivam kumar",
    
      userName: "shivam",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" 
      

    })
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
       <form>
              <div className="tweetBox_input">
                <Avatar 
                src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" />
                
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value = {tweetMessage}
                type="text"
                placeholder="What's 
                happening" />
                </div> 
                <input
                onChange={ (e) => setTweetImage(e.target.value)}
                value = {tweetImage}
                className="tweetBox_imageInput"
                placeholder="optional: Enter image url"
                type="text"
               />
                <Button
                onClick = {sendTweet}
                className="tweetBox_tweetButton">
                  Tweet 
                </Button>
               </form>
    </div>
  )
}

export default TweetBox 
