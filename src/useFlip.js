import { useState } from "react";

function useFlip(initialVal = true) {
    const [isFaceUp, setFaceUp] = useState(initialVal);
    const flip = () => {
        setFaceUp(isFaceUp => !isFaceUp);
    }
    
    return [isFaceUp, flip]
}

export default useFlip;