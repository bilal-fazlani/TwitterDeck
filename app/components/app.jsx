import  React from "react";
import Block from './block'
import AppHeader from './appHeader'
import {connect} from 'react-redux'

class App extends React.Component{
    render(){

        return <div>
            <AppHeader />
            {this.props.handles.length > 0 ?
                this.props.handles.map((h)=><Block {...h} />):
                <div id="no-handles">
                    No handles :(
                </div>
            }
        </div>
    }
}

App = connect(state=>{
    return{
        handles:state.handles
    }
})(App)

export default App