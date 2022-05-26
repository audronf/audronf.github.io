import React, { useState } from "react";
import '../scss/DarkModeToggle.scss';

const DarkModeToggle = () => {
    const [isToggled, setIsToggled] = useState(true);
    const onToggle = () => {
        if (!isToggled) {
            document.getElementById('container').classList.remove("light-mode") 
            document.getElementById('container').classList.add("dark-mode")
            document.getElementById('social').classList.add("tint")
        } else {
            document.getElementById('container').classList.remove("dark-mode")
            document.getElementById('social').classList.remove("tint")
            document.getElementById('container').classList.add("light-mode")
        }
        setIsToggled(!isToggled);
    }
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    );
}

export default DarkModeToggle;
