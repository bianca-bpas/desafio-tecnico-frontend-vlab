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

const postUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await api.post("/users", userData);
  return response.data;
}

export { getUsers, postUser }