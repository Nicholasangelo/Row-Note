// OK all Vs None
import axios from "axios";


export default {
  // api index login 
  // user API
  getAllUsers: function() {
    return axios.get("/signup");
  },
  getUser: function(query) {
    console.log("runngin running??");
    return axios.post("/api/signin", query);
  },
  getUserName: function(query) {
    console.log(`getUserName query: ${JSON.stringify(query)}`)
    return axios.get("/api/users/" + query);
  },
  createUser: function(query) {
    return axios.post("/signup", query);
  },
  checkAuth: function(query) {
    console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },

  saveNote: function(query) {
    return axios.put("/api/users/" + query);
  },
  getNote: function(query) {
    return axios.put("/api/:users/notes/", query);
  },

 
  //Project API
  createProject: function(projectData) {
    console.log(`API: ${JSON.stringify(projectData)}`)
    return axios.post("/api/projects", projectData);
  },
  getProjects: function(query) {
    return axios.get("/api/projects", query);
  },
  getAllProjects: function() {
    return axios.get("/api/projects");
  },
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  updateProject: function(projectData, data) {
    console.log(projectData)
    return axios.put("/api/projects/" + projectData, data);
  },  


};
