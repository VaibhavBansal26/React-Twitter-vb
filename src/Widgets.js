import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" type="text"/>
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening?</h2>
                {/*<TwitterTweetEmbed tweetId={"964575450335883264"}/>*/}
                <div className="tweet__embed">
                <TwitterTweetEmbed tweetId={"964729120297910272"}/>
                </div>
                
                <TwitterTimelineEmbed sourceType="profile" screenName="Vaibhavbansal26" options={{height:300}}/>

                <TwitterShareButton 
                url={"https://facebook.com/vaibhavbansal"}
                options={{text:"#react is awesome",via:"Vaibhavbansal26"}}/>
            </div>
        </div>
    )
}



export default Widgets
