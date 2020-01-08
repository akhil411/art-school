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
    },
    getRoles: function() {
        return axios.get("/api/roles/roles");
    },
    getUsers: function() {
        return axios.get("/api/users/users");
    },
    getUserType: function(id) {
        return axios.get("/api/users/users/" + id);
      },
    createPosts: function(postdata) {
        return   axios.post("/api/posts/posts", postdata);
    },
    getPosts: function() {
        return   axios.get("/api/posts/posts");
    },
    fileUpload: function(uploadsData) {
        return axios.post("/api/uploads/uploads", uploadsData)
    },
    setLike: function(userId) {
        return axios.post("/api/posts/like", userId)
    },
    getLikes: function(id) {
        return axios.get("/api/posts/getLikes/" + id)
    },
    setComment: function(userID) {
        return axios.post("/api/posts/comment", userID)
    },
    loadComments: function(id) {
        return axios.get("/api/posts/comments/" + id);
    }
};
