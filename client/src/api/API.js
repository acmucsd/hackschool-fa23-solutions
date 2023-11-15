import axios from "axios"; // to make HTTP requests to the backend

// Change the port if needed
const serverURL = 'http://localhost:4000';


const API = {
    getGameStats: function() {
        return axios.get(`${serverURL}/home/game`);
    },
    // getTopThreeGameStats: function() {
    //     return axios.get(`${serverURL}/home/game/top3`);
    // },
    createGame: function (stats) {
        return axios.post(`${serverURL}/home/game`, stats);
    }
}

export default API;