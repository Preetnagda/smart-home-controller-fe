import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import ColorPicker from "../../components/color_picker/color_picker";
import Form from 'react-bootstrap/Form';
import Moods from "../../components/moods/moods";
import {pushColor, postBrightness} from '../../api/fetchWorker';

class LedController extends React.Component{

    constructor(){
        super();
        this.state = {
            currentColor: {}
        }
    }

    brightnessChange(event){
        postBrightness(event.target.value);
        console.log(event.target.value);
    }

    onColorChange = (color) => {
        pushColor(color.rgb);
        this.setState({currentColor: color});

    }

    onMoodChange = (mood) => {
        console.log(mood);
    }

    render(){
        return( 
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <ColorPicker onColorChange={this.onColorChange}></ColorPicker>
                </Col>
                <Col md={6}>
                    <Moods onChange={this.onMoodChange} theme={this.state.currentColor.hex}></Moods>
                </Col>
            </Row>
            <Row>
                <div className="p-3">
                    <Form.Label>Brightness</Form.Label>
                    <Form.Range defaultValue={100} onChange={this.brightnessChange} />
                </div>

            </Row>
        </React.Fragment>
    )
    }
}

export default LedController