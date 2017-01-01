import  React from "react";
import HandleInput from './handleInput'
import HandleBlock from './handleBlock'

class twitterDeckApp extends React.Component{
    render(){
        return <div>
            <HandleInput />

            <HandleBlock />
            <HandleBlock />
            <HandleBlock />
            <HandleBlock />
        </div>
    }
}

export default twitterDeckApp