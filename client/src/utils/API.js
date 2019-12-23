import axios from "axios";

export default {
    registerUser: function(userData) {
        return   axios.post("/api/users/register", userData);
    },
    loginUser: function(userData) {
        return   axios.post("/api/users/login", userData);
    }
};
