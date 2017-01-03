import React from "react";
import {Paper} from 'material-ui';
import Tweet from './tweet'
import BlockHeader from './blockHeader'
import {connect} from 'react-redux'
import FakeTweet from './fakeTweets'

class Block extends React.Component{
    render(){
        return <Paper className="tweetBlock"
                      style={
                          {width: 300,
                              display: "inline-block",
                              margin:5,
                              verticalAlign: "top",
                              minHeight:600
                        }}>

                <BlockHeader {...this.props} />

            {
                this.props.isLoading === true ?
                <FakeTweet count={3} />
                :this.props.tweets.map((t)=><Tweet {...t} />)
            }
            </Paper>
    }
}

export default Block;