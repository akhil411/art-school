import axios from "axios";

export default {
    registerUser: function(userData) {
        return   axios.post("/api/users/register", userData);
    },
    loginUser: function(userData) {
        return   axios.post("/api/users/login", userData);
    },
    getNews: function(query) {
        return   axios.get("/api/news/news", { params: { q: query } });
    },
    getWeather: function(query) {
        return   axios.get("/api/weather/weather", { params: { q: query } });
    }
};
