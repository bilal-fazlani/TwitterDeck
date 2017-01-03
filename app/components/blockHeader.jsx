import React from 'react'
import {IconButton, RefreshIndicator} from 'material-ui'
import ActionRemove from 'material-ui/svg-icons/action/delete';

class BlockHeader extends React.Component {
    render() {

        console.log("blockheader: isLoading: " + this.props.isLoading)

        return <div style={{display: "flex",
            justifyContent: "space-between",
            position: 'relative'}}>
            <h2 style={{display: "inline", marginTop: 10}}>#{this.props.name}</h2>
            {this.props.isLoading === true ?
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
                        tooltip={`Remove #${this.props.name}`}>
                <ActionRemove  />
            </IconButton>}
        </div>
    }
}

export default BlockHeader

