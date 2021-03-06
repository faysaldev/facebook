import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';

function Header() {


    const [{user},dispatch]=useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/"><img src="/logo.png" /></Link>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <Link to="/" className="header__option headerActive">
                    <HomeIcon fontSize="large" />
                </Link>

                <Link to="/" className="header__option">
                <FlagIcon fontSize="large" />
                </Link>

                <Link to="/" className="header__option">
                <SubscriptionsIcon fontSize="large" />
                </Link>

                <Link to="/" className="header__option">
                <StorefrontIcon fontSize="large" />
                </Link>

                <Link to="/" className="header__option">
                 <SupervisedUserCircleIcon fontSize="large" />
                </Link>
            </div>

            <div className="header__right">
                
                <Link to="/profile" className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </Link>

                <IconButton><AddIcon /></IconButton>
                <IconButton><ForumIcon /></IconButton>
                <IconButton className="notification"><NotificationsActiveIcon /></IconButton>
                <IconButton><ExpandMoreIcon /></IconButton>
            </div>
        </div>
    )
}

export default Header

{/* <div className="header__option">
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
</div> */}