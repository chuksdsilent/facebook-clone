import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'
function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {/* {<Avatar src={src} />} */}
            {<Icon />}
            <p>{title}</p>

        </div>
    )
}

export default SidebarRow
