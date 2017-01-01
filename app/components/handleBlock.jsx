import React from "react";
import {List, ListItem, Divider, Avatar, AppBar} from 'material-ui';

class HandleBlock extends React.Component{
    render(){
        return <div style={{width: 300, display: "inline-block", margin:5}}>
            <AppBar iconStyleLeft={{display:"none"}} title="Title" />

            <List >

                <ListItem leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg"/>}
                          primaryText="Primary Text"
                          secondaryText="secondaryText" >
                </ListItem>
                <ListItem primaryText="Primary Text" secondaryText="secondaryText" ></ListItem>
                <ListItem primaryText="Primary Text" secondaryText="secondaryText" ></ListItem>
                <ListItem primaryText="Primary Text" secondaryText="secondaryText" ></ListItem>

                <Divider/>

                <ListItem primaryText="Primary Text" secondaryText="secondaryText" ></ListItem>
                <ListItem primaryText="Primary Text" secondaryText="secondaryText" ></ListItem>

            </List>
        </div>
    }
}

export default HandleBlock;