import { useState } from 'react'

export default function ToggleMenu() {

    const [resume, setResume] = useState("Experience")

    function handleClick(state) {
        setResume(state)
    }

    const content = {
        Education:
        <div>
            <div className="textbox">
                <h4>University of Nevada Las Vegas</h4>    
                <p>BS Computer Science, Expected May 2027</p>
                <p>GPA: 3.8</p>
                <br></br>
                <h4>Notable Coursework: </h4>
                <p>CIT 173: Intro to Linux <i>RHEL</i></p>
                <p>CS202: Object Oriented Programming <i>C++</i></p>
                <p>CS218: Systems Programming <i>x86</i></p>
                <br></br>
                <h4>Certifications</h4>
                <p>Google Cybersecurity Professional Certificate: <i>Python, SQL, BASH, SIEM, Linux</i></p>
            </div>
        </div>,
        Experience: 
        <div>
            <div className="textbox">
                <p>April 2025-Present</p>
                <h4>UNLV Office of Information Technology</h4>
                <p>Desktop Support Technican</p>
                <p>- Provide onsite and remote technical support for a diverse user base of over 30,000 students, faculty, and staff.</p>
                <p>- Troubleshoot and resolve hardware, software, and network issues within the Active Directory environment.</p>
                <p>- Ensure high levels of customer satisfaction through clear communication, timely resolution, and a service-oriented approach.</p>
            </div>
            <div className="textbox">
                <p>January 2020-Present</p>
                <h4>US Army</h4>
                <p>Staff Sergeant for Engineer Line Unit</p>
                <p>- Directed multidisciplinary engineering teams of 20+ personnel, overseeing operations in combat environments.</p>
                <p>- Managed and executed 130+ engineering projects delivering over $100K in combined materials and man-hours under strict time
                    and resource constraints.</p>
            </div>
        </div>
    };

    return (
        <div className="toggleContainer">
            <div className="toggleButtons">
                <button className={resume === "Experience" ? "toggleButtons toggleButton toggle-active" : "toggleButtons toggleButton"} onClick={() => handleClick("Experience")}>Experience</button>
                <button className={resume === "Education" ? "toggleButtons toggleButton toggle-active" : "toggleButtons toggleButton"} onClick={() => handleClick("Education")}>Education</button>
            </div>
            <div className="toggleBox">   
                    {content[resume]}
            </div>
        </div>
    )
}