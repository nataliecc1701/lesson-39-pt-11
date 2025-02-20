import axios from "axios";
import {v1 as uuid} from "uuid";
import useLocalArrayState from "./useLocalArrayState"

function useAxios(baseURL, format=(a) => a, stateKey) {
    const [arr, setArr] = useLocalArrayState(stateKey)
    
    const requestAndAddToArr = async function(suffix = "") {
        const response = await axios.get(suffix ? `${baseURL}/${suffix}` : baseURL);
        const data = format(response.data);
        setArr(arr => [...arr, {...data, id: uuid() }])
    }
    
    const clear = function () {
        setArr([])
    }
    
    return [arr, requestAndAddToArr, clear]
}

export default useAxios;