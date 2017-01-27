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
                renderedComponents.push(<span>
                    {component.text}
                </span>)
            }
            else if(component.tweetComponentType === "url"){
                renderedComponents.push(<a
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