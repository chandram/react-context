import React, { Component } from 'react'
import { ThemeContext } from './theme-context';

class ThemedButton extends Component {
  
  render() { 
    return ( 
      <ThemeContext.Consumer>
        {theme => (
          <button
            {...this.props}
            style={{backgroundColor: theme.background}}
          />
        )}
      </ThemeContext.Consumer>
     );
  }
}

export default ThemedButton;