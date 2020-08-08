import React, {useState, useEffect} from "react"

const useFadeIn = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
      function setter() {
        setFadeIn(true);
        console.log("hi")
      }
  
      setTimeout(setter, 2000)
    },[])

    return fadeIn;
}

export default useFadeIn;