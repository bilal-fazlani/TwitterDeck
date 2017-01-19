import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui'
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl'

class Tweet extends React.Component{
    render(){
        return <div style={{margin:10}}>
            <Card expandable={true}  initiallyExpanded={true}>
                <CardHeader actAsExpander={true} showExpandableButton={true}
                    title={this.props.name}
                            subtitle={<FormattedRelative
                                value={new Date(this.props.createdAt)} />
                            }
                    avatar={this.props.profilePicUrl}
                />
                <CardText expandable={true}>
                    {this.props.text}
                </CardText>
            </Card>
        </div>
    }
}

export default Tweet;