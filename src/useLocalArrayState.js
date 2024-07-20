// hook to combine react state with local storage

import {useState, useEffect} from "react";

function useLocalArrayState(key) {
    const [arr, setArr] = useState(() => {
        let value;
        try {
            if (!window.localStorage.getItem(key)) value = []
            else {
                value = JSON.parse(window.localStorage.getItem(key))
            }
        } catch (err) {
            console.log(err)
            value = [];
        }
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(arr))
    }, [arr, key])
    
    return [arr, setArr]
}

export default useLocalArrayState