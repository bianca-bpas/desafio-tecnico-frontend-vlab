import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json"
  }
});

const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
}

export default getUsers