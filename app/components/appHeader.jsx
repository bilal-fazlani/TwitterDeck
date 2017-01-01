import React from 'react'
import {Toolbar, ToolbarTitle, ToolbarGroup, RaisedButton, TextField} from 'material-ui'

class AppHeader extends React.Component {
    render(){
        return <Toolbar>
            <ToolbarTitle text="Twitter Deck" firstChild={true} />
            <ToolbarGroup >
                <form ref={(node)=>this.form = node}>
                    <TextField hintText="#handle" required={true} /> &nbsp;
                    <RaisedButton label="Add handle" primary={true}
                                  onTouchEnd={()=>this.form.submit()} />
                </form>
            </ToolbarGroup>
        </Toolbar>
    }
}

export default AppHeader