import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui'

class Tweet extends React.Component{
    render(){
        return <ListItem leftAvatar={
            <Avatar src={this.props.profilePicUrl}/>}
                         primaryText={this.props.name}
                         secondaryText={this.props.text} >
        </ListItem>
    }
}

export default Tweet;

class TweetNew extends React.Component{
    render(){
        return <div style={{margin:10}}>
            <Card expandable={true}  initiallyExpanded={true}>
                <CardHeader actAsExpander={true} showExpandableButton={true}
                    title={this.props.name}
                    subtitle="datetime"
                    avatar={this.props.profilePicUrl}
                />
                <CardText expandable={true}>
                    {this.props.text}
                </CardText>
            </Card>
        </div>
    }
}

export {TweetNew};