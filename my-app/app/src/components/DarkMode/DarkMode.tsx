import "./DarkMode.css"

const setDark = () => {
    // handle persistance
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");

    document.documentElement.setAttribute("data-theme", "light");
};

const storeTheme = localStorage.getItem("theme");

// determine users preference
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = 
    storeTheme === "dark" || (storeTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        setLight();
    } else {
        setDark();
    }
}

const DarkMode = () => {
    return (
        <div className="darkmode-toggle-container">
            <button className="darkmode-button" onClick={toggleTheme} defaultChecked={defaultDark}>
               <svg className="darkmode-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
                <mask id="ipSDarkMode0">
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4">
                        <path fill="white" stroke="white" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456L24.003 4Z"/>
                        <path  stroke="black" d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13Z"/>
                    </g>
                </mask>
                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDarkMode0)"/>
               </svg>
            </button>
        </div>
    )
};

export default DarkMode