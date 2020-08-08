import React,{useState,useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
          
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            <TweetBox/>
            <FlipMove>
            {posts.map (post => (
                <Post
                key={post.text} 
                displayName={post.displayName} 
                username={post.username} 
                verified={post.verified} 
                text={post.text} 
                avatar={post.avatar}
                image={post.image}
                timest={post.timest}/>
                ))}
            </FlipMove>
            <Post 
            displayName="Vaibhav Bansal" 
            username="king" 
            verified={true} 
            text="Yo code is working" 
            avatar="https://lh3.googleusercontent.com/ogw/ADGmqu-QSZ4z8Ec2k_VtX5DWhE2-3HY9U691FcOZjpZT=s32-c-mo"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuA5ss88JVSMTlqtnN-J7QgKrCI1JO6X8rkw&usqp=CAU"/>
            
        </div>
    )
}

export default Feed;
;