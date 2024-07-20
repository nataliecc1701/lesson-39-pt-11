import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useAxios(baseURL) {
    const [arr, setArr] = useState([])
    
    const requestAndAddToArr = async function(suffix = "") {
        const response = await axios.get(suffix ? `${baseURL}/${suffix}` : baseURL);
        setArr(arr => [...arr, {...response.data, id: uuid() }])
    }
    
    return [arr, requestAndAddToArr]
}

export default useAxios;