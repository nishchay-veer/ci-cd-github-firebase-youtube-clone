import React from "react";
import './SidebarRow.css';
function SidebarRow({selected, Icon , title}) {
    return(
        <div className={`sideBarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__logo" />
            <h2 className="sidebar__heading">{title}</h2>

        </div>

    )
}
export default SidebarRow;