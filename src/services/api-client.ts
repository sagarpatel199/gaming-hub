import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'dd2af418c76e493ca44eef82f43ebc76'
    }
})