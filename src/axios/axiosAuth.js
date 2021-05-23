import axios from "axios";

const axiosAuth = {
  login: (userData) =>
    axios.post("https://cdsapi.netimob.com/api/auth", userData),
};

export default axiosAuth;
