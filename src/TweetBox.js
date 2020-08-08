import React,{useState} from 'react'
import './TweetBox.css';
import { Avatar,Button } from '@material-ui/core';
import db from './firebase';
function TweetBox() {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Vaibhav Bansal',
            username:'KingVaibhav',
            text:tweetMessage,
            verified:true,
            image:tweetImage,
            avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu-QSZ4z8Ec2k_VtX5DWhE2-3HY9U691FcOZjpZT=s83-c-mo",
            timest:Date(Date.now()).toLocaleString()
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-QSZ4z8Ec2k_VtX5DWhE2-3HY9U691FcOZjpZT=s83-c-mo"/>
                    <input placeholder="How u doin...??" type="text" 
                    value={tweetMessage}
                    onChange = { (e) => setTweetMessage(e.target.value)}
                    />
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image Url" type="text" 
                onChange = { (e) => setTweetImage(e.target.value)}
                />
                <Button onClick = {sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}


export default TweetBox
