import React from 'react'
import {FormattedRelative} from 'react-intl'
import Tweet from './tweet'

class RetweetBox extends React.Component{
    render(){
        return <div className="retweet">
            <div className="retweet-Name">
                {<span>{this.props.name}
                    {this.props.verifiedUser?
                        <img className="verified-tick" src="/twitter_verified_tick.png" />:
                        null}
                </span>}
            </div>
            <div className="retweet-Time">
                <FormattedRelative value={new Date(this.props.createdAt)} />
            </div>
            <div className="retweet-Text">
                {!this.props.includeRetweets?
                    <Tweet tweetComponents={this.props.tweetComponents} />
                :<RetweetBox {...this.props.retweetedTweet} />}
            </div>
        </div>
    }
}

export default RetweetBox;