import React from "react";
import {RaisedButton, TextField} from 'material-ui';

class HandleInput extends React.Component{
    render(){
        let style={
            width:400
        }

        return <div style={{margin:5}}>
            <form onSubmit={(e)=> e.preventDefault()}>
                <TextField hintText="#handle" style={style} />
                &nbsp;&nbsp;
                <RaisedButton label="Add" primary={true} onMouseUp={this.props.onClick} />
            </form>
        </div>
    }
}

export default HandleInput