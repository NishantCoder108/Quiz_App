import axios from "axios";

const baseurl = import.meta.env.VITE_APP_BASE_URL + "/api/v1";

const AxiosInstance = axios.create({
    baseURL: baseurl, // Replace with your API base URL
    timeout: 10000, // Adjust the timeout as needed
    withCredentials: true, // Enable sending cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// You can add request interceptors or other configurations as needed

export default AxiosInstance;
