import { useState, useEffect, useCallback } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null
    })
    const handleResize = useCallback(() => {
        setWindowSize({
            width: document.innerHeight,
            height: document.innerWidth
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return windowSize;
}

export default useWindowSize