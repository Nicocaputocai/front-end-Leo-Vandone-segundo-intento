import axios from 'axios';

export default axios.create({
    baseURL: "https://api-leo.divisioncode.com.ar/api"
})