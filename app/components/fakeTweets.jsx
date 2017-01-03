import React from 'react'

class FakeTweets extends React.Component{
    render(){
        return <div>
            {[...Array(this.props.count)].map((x,i) => <img className="fakeTweet" src="/faketweet.png" />)}
        </div>
    }
}

export default FakeTweets