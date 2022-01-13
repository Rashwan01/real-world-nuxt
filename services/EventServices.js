import axios from "axios";

const $http = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  headers: {
    'Accept': "application/json",
    'content-type': "application/json"
  }
});
export default {
  getEvents() {
    return $http.get("/events")
  },
  getEvent(event) {
    return $http.get(`/events/${event}`)

  }
}
