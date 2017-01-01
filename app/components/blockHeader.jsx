import React from 'react'
import {IconButton} from 'material-ui'
import ActionRemove from 'material-ui/svg-icons/action/delete';

class BlockHeader extends React.Component {
    render() {
        return <div style={{display: "flex", justifyContent: "space-between"}}>
            <h2 style={{display: "inline", marginTop: 10}}>#{this.props.handle}</h2>
            <IconButton style={{verticalAlign: "middle"}}
                        tooltip={`Remove #${this.props.handle}`}>
                <ActionRemove  />
            </IconButton>
        </div>
    }
}

export default BlockHeader

