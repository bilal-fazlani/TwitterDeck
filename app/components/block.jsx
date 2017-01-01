import React from "react";
import {Paper} from 'material-ui';
import Tweet from './tweet'
import BlockHeader from './blockHeader'

class Block extends React.Component{
    render(){
        return <Paper className="tweetBlock" style={{width: 300, display: "inline-block", margin:5, verticalAlign: "top"}}>

                <BlockHeader handle={this.props.handle} />

                {this.props.tweets.map((t)=><Tweet name={t.name}
                                               profilePicUrl={t.profilePicUrl}
                                               text={t.text} />)}
            </Paper>
    }
}

export default Block;