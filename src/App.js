import React, { Component } from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';
import ToolBar from './toolbar';

class App extends Component {

  constructor(props){
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    }
  }

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <div>
            <ToolBar onChangeTheme={this.toggleTheme}></ToolBar>
            <section>
              <ThemeTogglerButton></ThemeTogglerButton>
            </section>
          </div>
        </ThemeContext.Provider>
        <section>
          <ThemedButton></ThemedButton>
        </section>
      </div>
      
    );
  }
}

export default App;


