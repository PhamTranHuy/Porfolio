import { useEffect, useRef } from 'react'
import useWindowSize from '../../../hooks/windowSize';

function Welcome({ onMount }) {
    const roleContainer = useRef();
    const windowSize = useWindowSize();
    const getRoleTitlePosition = () => {
        const rect = roleContainer.current.getBoundingClientRect();
        console.log(roleContainer.current.style.wordSpacing)
        const roleTop= rect.top;
        const roleRight = rect.right;
        return {
            top: roleTop,
            left: roleRight + 15
        }
    }
    useEffect(() => {
        onMount(getRoleTitlePosition());
    }, [windowSize])
    return (
        <div className='absolute inset-0 flex-center z-[2] 
                text-4xl font-bold pointer-events-none'>
            <div className='layout-max-w w-full child:my-4 child:w-fit'>
                <h1>Welcome to my Website!</h1>
                <h1>I am H<span className='text-2xl'>Myopic</span>.</h1>
                <h1 ref={roleContainer}>I'm a</h1>
            </div>
    </div>
    )
}

export default Welcome