import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token, api) => {

  if(token){
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else{
      delete api.defaults.headers.common["Authorization"];
  }
  
}
