import React from "react";

const SwitchTheme = () => {
    const [dark, setDark] = React.useState(localStorage.getItem("theme") === "dark");

    React.useEffect(() => {
        const theme = dark ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [dark]);

    return (
        <span className="form-check-inline form-switch mx-1">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchTheme"
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
            />
        </span>
    );
};

export default SwitchTheme;