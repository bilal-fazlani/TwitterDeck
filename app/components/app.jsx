import  React from "react";
import BlockList from './blockList'
import AppHeader from './appHeader'
import {connect} from 'react-redux'

class App extends React.Component{
    render(){

        return <div>
            <AppHeader />
            <BlockList />
        </div>
    }
}

App = connect(state=>{
    return{
        handles:state.handles
    }
})(App)

export default App