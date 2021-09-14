import axios from "axios";

export default class HttpServices {
  constructor(path, data) {
    // this.path = "https://ifarms-app.herokuapp.com" + path;
    this.path = "http://localhost:8084/api/v1" + path;
    this.data = data;
  }

  async post() {
    try {
      let { data } = await axios.post(this.path, this.data);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async get() {
    try {
      let { data } = await axios.get(this.path);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
}
