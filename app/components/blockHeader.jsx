import React from 'react'
import {IconButton, RefreshIndicator} from 'material-ui'
import ActionRemove from 'material-ui/svg-icons/action/delete';
import {connect} from 'react-redux'
import {removeHandleServerAsync} from '../actionsCreators/handleActions'

class BlockHeader extends React.Component {
    render() {

        let headerClassNames = `${this.props.tweetsLoading?"gray":""} ${this.props.isSaving?"blur":""}`

        return <div style={{display: "flex",
                    justifyContent: "space-between",
                    position: 'relative'}}>
                    <h2 className={headerClassNames} style={{display: "inline", marginTop: 10}}>#{this.props.name}</h2>
                    {this.props.isSaving === true ?
                        <RefreshIndicator
                            size={40}
                            left={0}
                            top={0}
                            loadingColor="#FF9800"
                            status="loading"
                            style={{position: 'relative',
                                display: 'inline-block',
                                margin:7}}
                        />
                        :
                        <IconButton style={{verticalAlign: "middle"}}
                                    onClick={()=>this.props.onRemoveClick(this.props.id)}
                                    tooltip={`Remove #${this.props.name}`} tooltipPosition="top-center"
                                    >
                            <ActionRemove />
                        </IconButton>}

                </div>
    }
}

BlockHeader = connect(null, dispatch => {
    return {
        onRemoveClick: (id)=> dispatch(removeHandleServerAsync(id))
    }
})(BlockHeader)

export default BlockHeader

