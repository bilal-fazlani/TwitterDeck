import React from "react";
import {List, ListItem, Divider, Avatar, Card,
    CardTitle, FloatingActionButton, Paper, IconButton} from 'material-ui';
import ActionRemove from 'material-ui/svg-icons/action/delete';
import Tweet, {TweetNew} from './tweet'

import ContentRemove from 'material-ui/svg-icons/content/remove';

class HandleBlock extends React.Component{
    render(){
        return <Paper className="tweetBlock" style={{width: 300, display: "inline-block", margin:5, verticalAlign: "top"}}>

                <div style={{display:"flex", justifyContent:"space-between"}}>

                    <h2 style={{display:"inline", marginTop:10}}>#handle</h2>

                    <IconButton style={{verticalAlign:"middle"}} tooltip="Remove" >
                        <ActionRemove  />
                    </IconButton>
                </div>

                <TweetNew name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd
dasdasnmb asiduyqiuwy dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

                <TweetNew name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

                <TweetNew name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

            </Paper>
    }
}

export default HandleBlock;