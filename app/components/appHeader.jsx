import React from 'react'
import {Toolbar, ToolbarTitle, ToolbarGroup, RaisedButton, TextField} from 'material-ui'
import {connect} from 'react-redux'
import {addHandle} from '../actionsCreators/handleActions'

class AppHeader extends React.Component {
    render(){
        return <Toolbar>
            <ToolbarTitle text="Twitter Deck" firstChild={true} />
            <ToolbarGroup >
                <form ref={(node)=>this.form = node} >
                    <TextField ref={node=>this.input=node} hintText="#handle" required={true} /> &nbsp;
                    <RaisedButton label="Add handle" primary={true}
                                  onClick={()=>{
                                      console.log("onClick called-> handlename: "+ this.input.input.value)
                                      this.props.onAddClick(this.input.input.value)
                                  }} />
                </form>
            </ToolbarGroup>
        </Toolbar>
    }
}

AppHeader = connect(null, dispatch => {
    return{
        onAddClick : (input)=> {
            console.log("onAddClick called -> handlename: "+ input)
            dispatch(addHandle(input))
        }
    }
})(AppHeader)

export default AppHeader