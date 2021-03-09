import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import { useStateValue } from './StateProvider';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__mobile">

                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <NotificationsIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SearchIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontSize="large" />
                    </div>
                </div>
            </div>
            <div className="header__display">

                <div className="header__desktop">

                    <div className="header__left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                            alt="facebook logo" />
                        <div className="header__input">
                            <SearchIcon />
                            <input type="text" placeholder="Search Facebook" />
                        </div>
                    </div>
                    <div className="header__center">
                        <div className="header__option header__option--active">
                            <HomeIcon fontSize="large" />
                        </div>
                        <div className="header__option">
                            <FlagIcon fontSize="large" />
                        </div>
                        <div className="header__option">
                            <SubscriptionsIcon fontSize="large" />
                        </div>
                        <div className="header__option">
                            <StorefrontIcon fontSize="large" />
                        </div>
                        <div className="header__option">
                            <SupervisedUserCircleIcon fontSize="large" />
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__info">
                            <Avatar src={user.photoURL} />
                            <h4>{user.displayName}</h4>
                        </div>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                        <IconButton>
                            <ForumIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
