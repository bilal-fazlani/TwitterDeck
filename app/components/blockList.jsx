import React from "react";
import Block from './block'
import {connect} from 'react-redux'

class BlockList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            {this.props.handles.length > 0 ?
                this.props.handles.map((h)=><Block {...h} />):
                <div id="no-handles">
                    No handles :(
                </div>
            }
        </div>
    }
}

BlockList = connect(state=>{
    return{
        ...state
    }
})(BlockList)

export default BlockList