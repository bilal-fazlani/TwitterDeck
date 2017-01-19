import React from "react";
import Block from './block'
import {connect} from 'react-redux'
import {loadHandlesServerAsync} from '../actionsCreators/handleActions'

class BlockList extends React.Component{

    constructor(props){
        super(props)
        this.props.onLoad()
    }

    render(){
        if(this.props.handlesCallState == "loading"){
            return <div className="blockListCenter">
                Loading handles...
            </div>
        }
        else if(this.props.handlesCallState == "loaded"){
            return <div>
                {this.props.handles.length > 0 ?
                    this.props.handles.map((h)=><Block {...h} />):
                    <div className="blockListCenter">
                        No handles :(
                    </div>
                }
            </div>
        }
        else{
            throw "unknown handlesCallState: "+ this.props.handlesCallState
        }
    }
}

BlockList = connect(state=>{
    return{
        ...state
    }
},
dispatch =>{
    return {
        onLoad: ()=>{
            console.log("loaded list component")
            dispatch(loadHandlesServerAsync())
        }
    }
}
)(BlockList)

export default BlockList