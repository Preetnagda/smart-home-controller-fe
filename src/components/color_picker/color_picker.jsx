import React from 'react';
import { SketchPicker } from 'react-color';

import './color_picker.css';

class ColorPicker extends React.Component {
    state = {
      background: {a: 1, b: 196, g: 8, r: 39},
    };
  
    handleChangeComplete = (color, event) => {
      this.setState({ background: color.rgb }, () => {
        this.props.onColorChange(color);
      });
    };

    colorPresets = ['#FF0000', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', 
        '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#FFFFFF']
  
    render() {
      return( 
        <React.Fragment>
            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
                disableAlpha={true}
                presetColors={this.colorPresets}
            />
        </React.Fragment>
        )
    }
  }

  export default ColorPicker;