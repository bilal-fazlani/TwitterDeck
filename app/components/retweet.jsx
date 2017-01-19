import React from 'react'
import {FormattedRelative} from 'react-intl'

class Retweet extends React.Component{
    render(){
        return <div className="retweet">
            <div className="retweet-Name">
                {this.props.name}
            </div>
            <div className="retweet-Time">
                <FormattedRelative value={new Date(this.props.createdAt)} />
            </div>
            <div className="retweet-Text">
                {!this.props.includeRetweets?
                    this.props.text:
                <Retweet {...this.props.retweetedTweet} />}
            </div>
        </div>
    }
}

export default Retweet;