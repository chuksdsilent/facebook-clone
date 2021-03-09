import { Chat, ChatOutlined, EmojiFlags, LocalHospital, People, PeopleOutline, Storefront } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Sidebar() {
    return (
        <div className="sidebar">
            {/* <SidebarRow title='user.displayName' Icon="" src={user.photoURL} /> */}
            <SidebarRow title='COVID-19 Information Center' Icon={LocalHospital} src="" />
            <SidebarRow title='Pages' Icon={EmojiFlags} src="" />
            <SidebarRow title='Friends' Icon={PeopleIcon} src="" />
            <SidebarRow title='Messenger' Icon={ChatIcon} src="" />
            <SidebarRow title='Market Place' Icon={StorefrontIcon} src="" />
            <SidebarRow title='Videos' Icon={VideoLibraryIcon} src="" />

        </div>
    )
}

export default Sidebar
