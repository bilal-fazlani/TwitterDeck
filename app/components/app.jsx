import  React from "react";
import Block from './block'
import AppHeader from './appHeader'

class twitterDeckApp extends React.Component{
    render(){
        return <div>

            <AppHeader />

            <Block />
            <Block />
            <Block />
            <Block />
        </div>
    }
}

export default twitterDeckApp