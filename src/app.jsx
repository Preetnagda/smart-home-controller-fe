import React from 'react';
import { SketchPicker } from 'react-color';
import {pushColor} from './api/fetchWorker';

import './app.css';

class App extends React.Component {
    state = {
      background: {a: 1, b: 196, g: 8, r: 39},
    };
  
    handleChangeComplete = (color, event) => {
      this.setState({ background: color.rgb }, () => {
        pushColor(color.rgb);
      });
    };
  
    render() {
      return <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
        disableAlpha={true}
       />;
    }
  }

  export default App;