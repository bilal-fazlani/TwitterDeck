import  React from "react";
import Block from './block'
import AppHeader from './appHeader'
import {connect} from 'react-redux'

class App extends React.Component{
    render(){
        return <div>

            <AppHeader />

            {this.props.handles.map((h)=><Block handle={h.name} tweets={h.tweets} />)}
        </div>
    }
}

App = connect(state=>{
    return{
        handles:state.handles
    }
})(App)

export default App