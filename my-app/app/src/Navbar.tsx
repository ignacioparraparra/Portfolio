import './Navbar.css'
import DarkMode from './DarkMode'

function Navbar() {
    return(
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <svg className='navbar-icon' width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="M3 7L0 6V2h2v3h1m2-2h1V1h2v3L5 5M3 8V0h2v8"/></svg>
        </div>
        <div className='navbar-qoute'>IGNACIO PARRA PARRA</div>
        <div className='navbar-socials'>
            <div className='icons-container'>
                <a      className='linkedin-container'
                        href="https://linkedin.com/in/ignacio-parra-parra"
                        target="_blank"
                        aria-label="LinkedIn"
                        rel="noopener noreferrer"
                    >
                <div className='linkedin-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 464 480"><path fill="currentColor" d="M462 274v170h-98V285q0-67-50-67q-37 0-51 36q-3 7-3 24v166h-99q1-269 0-297h99v42l-1 1h1v-1q32-49 89-49q51 0 82 34t31 100zM58 4Q33 4 17.5 18.5T2 55t15 37t39 15h1q25 0 40.5-15T113 55q-1-22-16-36.5T58 4zM7 444h99V147H7v297z"/></svg>
                </div>
                </a>
                
                <a className='github-container'
                    href="https://github.com/ignacioparraparra"
                    target="_blank"
                    aria-label="Github"
                    rel="noopener noreferrer">
                    <div className='linkedin-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
                    </div>
                </a>
            </div>
            <div className='toggle-container'>
                <DarkMode/>
            </div>
        </div>
    </div>)
}

export default Navbar