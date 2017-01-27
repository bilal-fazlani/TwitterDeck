import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui'
import {FormattedRelative} from 'react-intl'
import RetweetBox from './retweetBox'
import Tweet from './tweet'

class TweetBox extends React.Component{
    render(){
        return <div style={{margin:10}}>
            <Card expandable={true}  initiallyExpanded={true}>
                <CardHeader actAsExpander={true} showExpandableButton={true}
                            title={<span>{this.props.name}
                                {this.props.verifiedUser?
                                <img className="verified-tick" src="/twitter_verified_tick.png" />:
                                    null}
                            </span>}
                            subtitle={<FormattedRelative
                                value={new Date(this.props.createdAt)} />
                            }
                    avatar={this.props.profilePicUrl}
                />
                <CardText expandable={true}>
                    {!this.props.includeRetweets?
                        <Tweet tweetComponents={this.props.tweetComponents}/>
                        :<RetweetBox {...this.props.retweetedTweet} />
                    }
                </CardText>
            </Card>
        </div>
    }
}

export default TweetBox;