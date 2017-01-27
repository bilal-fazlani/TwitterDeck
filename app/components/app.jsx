import  React from "react";
import BlockList from './blockList'
import AppHeader from './appHeader'
import {Snackbar} from 'material-ui'
import {connect} from 'react-redux'
import {hideError} from '../actionsCreators/commonActions'

class App extends React.Component{
    render(){

        return <div>
            <AppHeader />
            <BlockList />
            <Snackbar message={this.props.error.message}
                      open={this.props.error.hasError}
                      action="Reload"
                      onActionTouchTap={this.props.onActionTouchTap}
                      onRequestClose={this.props.onRequestClose}
            />
        </div>
    }
}

App = connect(state=>{
    return{
        ...state
    }
},(dispatch)=>{
return {
    onRequestClose : ()=>false,
    onActionTouchTap: ()=> window.location.reload(true)
}
    }
)(App)

export default App