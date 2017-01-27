import React from 'react'

class TwitterText extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let {tweetComponents} = this.props;
        let renderedComponents = [];

        console.log("components: ")

        for(let component of tweetComponents){

            console.log(component)

            if(component.tweetComponentType === "text"){
                renderedComponents.push(<span className="tweetText">
                    {component.text}
                </span>)
            }

            else if(component.tweetComponentType === "hashTag"){
                renderedComponents.push(<span className="hashTag">
                    {component.text}
                </span>)
            }

            else if(component.tweetComponentType === "userMention"){
                renderedComponents.push(<span className="userMention">
                    {component.text}
                </span>)
            }

            else if(component.tweetComponentType === "url"){
                renderedComponents.push(<a className="tweetLink"
                    target="_blank"
                    href={component.url}>
                    {component.text}</a>)
            }
        }

        return <div>{renderedComponents}</div>
    }
}

TwitterText.propTypes = {
    tweetComponents : React.PropTypes.array.isRequired
}

export default TwitterText