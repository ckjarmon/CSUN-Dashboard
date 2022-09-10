import Header from './components/Header'
import Classes from './components/Classes'
import {useRef} from 'react'

function HomePage(){
    const header = useRef(null)
    const classes = useRef(null)

    function scrollToSection(elementRef){
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
         })
    }

    return(
        <div>
            <Header></Header>
            <Classes></Classes>
        </div>
    )
}

export default HomePage;