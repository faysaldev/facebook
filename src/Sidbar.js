import React from 'react'
import './Sidbar.css';
import SidbarRow from './SidbarRow';
import AddIcon from '@material-ui/icons/Add';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';



function Sidbar() {

    const [{user}, dispatch] =useStateValue();

    return (
        <div className="sidbar">
            <NavLink to="/profile"><SidbarRow img={user.photoURL} text={user.displayName} /></NavLink>
            <SidbarRow Icon={AddIcon} text="COVIT-19 information Conter" />
            <SidbarRow Icon={FlagIcon} text="Page" />
            <SidbarRow Icon={GroupIcon} text="Friends" />
            <SidbarRow Icon={ChatIcon} text="Messages" />
            <SidbarRow Icon={StorefrontIcon} text="Marketplace" />
            <SidbarRow Icon={VideoLibraryIcon} text="Videos" />
            <SidbarRow Icon={ExpandMoreIcon} text="More" />
        </div>
    )
}

export default Sidbar
