import {useState, useEffect} from "react"

const useFadeIn = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
      function setter() {
        setFadeIn(true);
      }
  
      setTimeout(setter, 1800)
    },[])

    return fadeIn;
}

export default useFadeIn;