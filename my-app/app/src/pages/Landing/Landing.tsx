import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import BubbleSortViz from '../../components/BubbleSortViz/BubbleSortViz'

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
                <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <span className='footer-text-main'>SOFTWARE ENGINEER</span>
                    <span className='footer-text-hover'>RESUME</span>
                </a> 
            </div>
            <div className='slider-container'>
                <Slider/>
            </div>
        </div>
    </div>
    )
}

export default Landing
