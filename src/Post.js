import React,{forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(({displayName,username,verified,text,image,avatar,timest},ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                    <h3>{displayName}{" "}<span className="post__headerSpecial">
                       {verified && <VerifiedUserIcon className="post__badge"/>}
                       {" "}@{username}{timest}</span></h3>
                    </div>
                <div className="post__headerDescription">
                <p>{text}</p>
                </div>
                </div>
            {image && <img src={image} alt="vaibhav"/>}
          
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small" />
                <FavoriteIcon fontSize="small"/>
                <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
});


export default Post
