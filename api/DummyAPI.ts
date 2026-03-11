// Axios Connector
import axios from "axios";

const DummyAPI = axios.create({
  baseURL: `https://dummyjson.com`,
  timeout: 60000 * 3,
});

export default DummyAPI;
