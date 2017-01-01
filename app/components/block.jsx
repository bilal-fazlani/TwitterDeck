import React from "react";
import {Paper} from 'material-ui';
import Tweet from './tweet'
import BlockHeader from './blockHeader'

class Block extends React.Component{
    render(){
        return <Paper className="tweetBlock" style={{width: 300, display: "inline-block", margin:5, verticalAlign: "top"}}>

                <BlockHeader/>

                <Tweet name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd
dasdasnmb asiduyqiuwy dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd iqwy 982347oweihrkjenf sd fsd dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

                <Tweet name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

                <Tweet name="FirstN LastN"
                          profilePicUrl="http://www.material-ui.com/images/ok-128.jpg"
                          text="dasdasnmb asiduyqiuwy iqwy 982347oweihrkjenf sd fsd" />

            </Paper>
    }
}

export default Block;