import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useRef, useState, useEffect} from "react";
const Slider = ({slides}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [startingIndex, setStartingIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(slides.length - 1)
    const image = useRef(null)
    const windowSize = window.innerWidth
    const fontSizeValue = windowSize < 640 ? 14 : 20
    const backHandler = () => {
        activeIndex == 0 ? setActiveIndex(lastIndex) : setActiveIndex(prev => prev - 1)
    }

    const NextHandler = () => {
        activeIndex == lastIndex ? setActiveIndex(startingIndex) : setActiveIndex(prev => prev + 1)
    }

    useEffect(() => {
        const autoslide = setTimeout(() => {
            activeIndex == lastIndex ? setActiveIndex(startingIndex) : setActiveIndex(prev => prev + 1)
        }, 7000)

        image.current.classList.add('opacity-0', 'transition', 'duration-500', 'transform')
        const transition = setTimeout(() => {
            image.current.classList.remove('opacity-0')
        }, 100);
        return () => {
            clearTimeout(transition)
            clearTimeout(autoslide)
        }
    }, [activeIndex])

    return(
        <>
            <div className={`flex justify-center gap-4 max-w-full h-32 items-center bg-blue-200 xs:h-40 sm:h-60 sm:gap-14 md:h-72 md:gap-16 lg:h-96 lg:gap-20`}>
                <button onClick={backHandler}><ArrowBackIosNewIcon style={{fontSize: fontSizeValue}}/></button>
                    {slides.map((slide, slideId) => (
                        activeIndex == slideId && <img ref={image} key={slideId} src={`${slide.path}`} className={`w-2/3 h-24 xs:h-3/4 xs:w-2/3 lg:w-2/3 rounded shadow`}/>
                    ))}
                <button onClick={NextHandler}><ArrowForwardIosIcon style={{fontSize: fontSizeValue}}/></button>
            </div>
        </>
    )
}
export default Slider