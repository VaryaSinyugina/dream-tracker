import Icon from "../../ui/Icon/Icon";

import "./MenuButton.scss";

export default function MenuButton({onClick}) {
    return <button onClick={onClick} className="menu-button">
        <span></span>
        <span></span>
        <span></span>
    </button>
}