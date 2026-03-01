import './Landing.css'
import Navbar from './Navbar'
import Slider from './Slider'
import BubbleSortViz from './BubbleSortViz'

function Landing () {
    return (
    <div className="page-wrapper">
        <div className="container">
            <Navbar/>
            <div className='content'>
                <BubbleSortViz/>
            </div>
            <div className='slider-container'>
                <Slider/>
            </div>
            <div className='footer'>
               SOFTWARE ENGINEER 
            </div>
            <div className='slider-container'>
                <Slider/>
            </div>
        </div>
    </div>
    )
}

export default Landing