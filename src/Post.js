
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';
import React, {forwardRef} from "react";
import './Post.css'



 const Post = forwardRef(
  ({ displayName, userName,verified,text,image,avatar
  }, ref)  => {
  return (
    <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar  src ={avatar} />
      </div>
      <div className="post_bodys">
        <div className="post_header">
            <div className="post_headerText">
                <h3>
                {displayName} 
                    <span className="post_headerSpecial">
                     {verified && <VerifiedUserIcon className="post_badge" />}
                     @{userName}Shivam
                    </span>
                </h3>
              </div>
            <div className="post_headerDescription">
              <p>{text}</p>
             </div>
        </div>
        <img
                 src= {image}
                
          alt=""
          />
          <div className="post_footer">
           <ChatBubbleOutlineIcon fontSize="small" />
           <RepeatIcon fontSize="small"/>
           <FavoriteBorderIcon fontSize="small"/>
           <PublishIcon fontSize="small"/>

          </div>
      </div>

    </div>
  )
})

export default Post;

