import axios from "axios";

const BASE_URL = "http://raspberrypi.local:8000/"

export const pushColor = (data) => {
    axios.post(BASE_URL + "rgb", {red: data.r, green: data.g, blue: data.b}).then((response) => {
        console.log(response.data);
    })
}