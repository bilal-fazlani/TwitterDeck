import  React from "react";
import HandleBlock from './handleBlock'
import {Toolbar, ToolbarTitle, RaisedButton, ToolbarGroup, TextField} from 'material-ui'

class twitterDeckApp extends React.Component{
    render(){
        return <div>
            <Toolbar>
                    <ToolbarTitle text="Twitter Deck" firstChild={true} />
                    <ToolbarGroup >
                        <form ref={(node)=>this.form = node}>
                            <TextField hintText="#handle" required={true} /> &nbsp;
                            <RaisedButton label="Add handle" primary={true}
                                          onTouchEnd={()=>this.form.submit()} />
                        </form>
                    </ToolbarGroup>
            </Toolbar>

            <HandleBlock />
            <HandleBlock />
            <HandleBlock />
            <HandleBlock />
        </div>
    }
}

export default twitterDeckApp