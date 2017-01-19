import React from "react";
import {Paper} from 'material-ui';
import Tweet from './tweet'
import BlockHeader from './blockHeader'
import {connect} from 'react-redux'
import FakeTweet from './fakeTweets'
import {loadTweetsServerAsync} from '../actionsCreators/tweetActions'

class Block extends React.Component{
    constructor(props){
        super(props);

        this.props.onLoadBlock(this.props.name, this.props.localId)
    }

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
                this.props.tweetsLoading === true ?
                <FakeTweet count={3} />
                :this.props.tweets.map((t, index)=><Tweet key={index.toString()} {...t} />)
            }
            </Paper>
    }
}

Block = connect(null, dispatch => {
    return {
        onLoadBlock: (handleName, localId)=>{
            dispatch(loadTweetsServerAsync(localId, handleName))
        }
    }
})(Block)

export default Block;