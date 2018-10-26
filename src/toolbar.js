import React, { Component } from 'react';
import ThemedButton from './themed-button';

class ToolBar extends Component {
    render() { 
        return ( 
            <ThemedButton onClick={this.props.onChangeTheme}>Change Theme</ThemedButton>
        );
    }
}
 
export default ToolBar;