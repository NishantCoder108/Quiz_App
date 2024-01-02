import axios from "axios";
import { store } from "../store/store";

const baseurl = import.meta.env.VITE_APP_BASE_URL + "/api/v1";

const AxiosInstance = axios.create({
    baseURL: baseurl, // Replace with your API base URL
    timeout: 10000, // Adjust the timeout as needed
    withCredentials: true, // Enable sending cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to include the access token in the headers
AxiosInstance.interceptors.request.use(
    (config) => {
        // Get the access token from your Redux state
        const accessToken = store.getState().auth.token;

        // If the access token exists, add it to the headers
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

export default AxiosInstance;
