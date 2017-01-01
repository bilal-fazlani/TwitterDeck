import React from "react";
class HandleInput extends React.Component{
    render(){
        return <div>
            <form>
                <input type="text" placeholder="#handle" autoFocus/>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    }
}


export default HandleInput