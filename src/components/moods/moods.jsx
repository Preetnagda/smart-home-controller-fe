import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

import "./moods.css";

const Moods= (props) => (<>
        <Row>
                <MoodButton 
                    theme = {props.theme}
                    onClick= {props.onChange}
                >
                    Party
                </MoodButton>
                <MoodButton 
                    theme = {props.theme}
                    onClick= {props.onChange}
                >
                    Strobe
                </MoodButton>
        </Row>
        <Row>
                <MoodButton 
                    theme = {props.theme}
                    onClick= {props.onChange}
                >
                    Warm
                </MoodButton>
                <MoodButton 
                    theme = {props.theme}
                    onClick= {props.onChange}
                >
                    Fade
                </MoodButton>
        </Row>
    </>)


export const MoodButton = (props) => {

    const changeMoodValue = () => {
        props.onClick(props.value ?? props.children)
    }

    return  <Col className="d-flex justify-content-center" xs = {6}>
    <Button 
        onClick={changeMoodValue} 
        className={"moodButton"}
        style={{backgroundColor: props.theme, borderColor: props.theme}}
        >
            {props.children}
    </Button>
</Col>
}

    


export default Moods