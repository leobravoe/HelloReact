import React from 'react'

const SwithTheme = () => {
    const switchClick = () => {
        const mode = document.querySelector("html").getAttribute("data-bs-theme");
        if(mode == "dark")
            document.querySelector("html").setAttribute("data-bs-theme", "light");
        else
            document.querySelector("html").setAttribute("data-bs-theme", "dark");
    }
    return (
        <span className="form-check-inline form-switch mx-1">
            <input
                className="form-check-input"
                type="checkbox" role="switch"
                id="switchCheckDefault"
                onChange={switchClick}
            />
        </span>
    )
}

export default SwithTheme
