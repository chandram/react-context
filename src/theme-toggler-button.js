import React, { Component } from 'react'
import { ThemeContext } from './theme-context';

// class ThemeTogglerButton extends Component {
//     // The Theme Toggler Button receives not only the theme
//    // but also a toggleTheme function from the context
//     render() { 
//         return ( 
//             <ThemeContext.Consumer>
//                 {({theme, toggleTheme}) => (
//                     <button onClick={toggleTheme}  
//                             style={{backgroundColor: theme.background}}>
//                         Toggle Theme--> {theme} 
//                     </button>
//                 )}
//             </ThemeContext.Consumer>
//         );
//     }
// }
 
function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;