import axios from "axios";

export default {
    registerUser: function (userData) {
        return axios.post("/api/users/register", userData);
    },
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData);
    },
    getNews: function (query) {
        return axios.get("/api/news/news", { params: { q: query } });
    },
    getWeather: function (query) {
        return axios.get("/api/weather/weather", { params: { q: query } });
    },
    getRoles: function () {
        return axios.get("/api/roles/roles");
    },
    getUsers: function () {
        return axios.get("/api/users/users");
    },
    getUserType: function (id) {
        return axios.get("/api/users/users/" + id);
    },
    getStudentUsers: function (id) {
        return axios.get("/api/users/students/" + id);
    },
    createPosts: function (postdata) {
        return axios.post("/api/posts/posts", postdata);
    },
    getPosts: function (skip) {
        return axios.get("/api/posts/posts/" + skip);
    },
    fileUpload: function (uploadsData) {
        return axios.post("/api/uploads/uploads", uploadsData)
    },
    setLike: function (userId) {
        return axios.post("/api/posts/like", userId)
    },
    getLikes: function (id) {
        return axios.get("/api/posts/getLikes/" + id)
    },
    setComment: function (userID) {
        return axios.post("/api/posts/comment", userID)
    },
    loadComments: function (id) {
        return axios.get("/api/posts/comments/" + id);
    },
    submitEnquiry: function (enquiry) {
        return axios.post("/api/enquiry/enquiry", enquiry);
    },
    submitResume: function (resume) {
        return axios.post("/api/resume/resume", resume);
    }, 
    getEnquiry: function () {
        return axios.get("/api/enquiry/enquiry");
    },
    postAnnouncement: function (postdata) {
        return axios.post("/api/announcements/announcements", postdata);
    },
    getAnnouncements: function () {
        return axios.get("/api/announcements/announcements");
    },
    deleteAnnouncement: function (id) {
        return axios.delete("/api/announcements/announcements/" + id);
    },
    submitReport: function (postdata) {
        return axios.post("/api/reports/reports", postdata)
    },
    getReports: function (id) {
        return axios.get("/api/reports/reports/" + id);
    },
    getStudentReports: function (id) {
        return axios.get("/api/reports/student-reports/" + id);
    },
    deleteReport: function (id) {
        return axios.delete("/api/reports/reports/" + id);
    },
    updatePassword: function (postdata) {
        return axios.post("/api/users/password", postdata)
    }
};
