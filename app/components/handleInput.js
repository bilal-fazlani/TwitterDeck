import React from "react";
import {RaisedButton, TextField} from 'material-ui';

class HandleInput extends React.Component{
    render(){
        let style={
            width:400
        }

        return <div style={{marginBottom:15, marginTop:15,
            marginLeft:"auto", marginRight:"auto", width:500}}>
            <form onSubmit={(e)=> e.preventDefault()}>
                <TextField hintText="#handle" style={style} />
                &nbsp;&nbsp;
                <RaisedButton label="Add" primary={true} onMouseUp={this.props.onClick} />
            </form>
        </div>
    }
}

export default HandleInput