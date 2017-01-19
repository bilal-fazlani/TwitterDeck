import React from 'react'
import {Toolbar, ToolbarTitle, ToolbarGroup, RaisedButton, TextField} from 'material-ui'
import {connect} from 'react-redux'
import {addHandleServerAsync} from '../actionsCreators/handleActions'

class AppHeader extends React.Component {
    render(){
        return <Toolbar>
            <ToolbarTitle text="Twitter Deck" firstChild={true} />
            <ToolbarGroup >
                <form ref={(node)=>this.form = node} >
                    <TextField ref={node=>this.input=node}
                               hintText="#handle"
                               disabled={this.props.handlesCallState!="loaded"}
                               required={true} /> &nbsp;
                    <RaisedButton label="Add handle"
                                  disabled={this.props.handlesCallState!="loaded"}
                                  primary={true}
                                  onClick={()=>{
                                      this.props.onAddClick(this.input.input.value)
                                  }} />
                </form>
            </ToolbarGroup>
        </Toolbar>
    }
}

AppHeader = connect(state=>{
    return{
        ...state
    }
}, dispatch => {
    return{
        onAddClick : (input)=> {
            dispatch(addHandleServerAsync(input))
        }
    }
})(AppHeader)

export default AppHeader