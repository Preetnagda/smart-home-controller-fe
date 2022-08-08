import axios from "axios";

// const BASE_URL = "http://raspberrypi.local:8000/"
const BASE_URL = "http://localhost:8000/"
const axios_instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

export const pushColor = (data) => {
    axios_instance.post("led/rgb", {red: data.r, green: data.g, blue: data.b}).then((response) => {
        console.log(response.data);
    })
}

export const postBrightness = (data) => {
    axios_instance.post("led/brightness", {brightness: parseInt(data)}).then((response) => {
        console.log(response.data);
    })
}