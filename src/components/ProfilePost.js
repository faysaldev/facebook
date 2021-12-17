import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';


function Post({ profilePic,username,time,text,postImg,sidetext,updatePPic }) {

    const [likes, setLikes] =useState(false);

    const likeHandler=()=>{
        if(likes){
            setLikes(false)
        }else{
            setLikes(true)
        }
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} />
                <div className="postHeader__info">
                    <div className="postHeader__sideAvater">
                    <h3>{username}</h3> <span>{sidetext}</span>
                    </div>
                    <p>{time}</p>
                </div>
                <IconButton className="more__button">
                <MoreVertIcon/>
                </IconButton>
            </div>

            <div className="post__massage">
                <p>{text}</p>
            </div>

            <div className={`post__img ${updatePPic && "upload__img"}`}>
                {updatePPic && <Avatar className="update__profile__pic" src={updatePPic} />}
                <img src={postImg} />
            </div>

            <div className="post__bottom">
               <div className="post__option" onClick={likeHandler} >
                   {likes? (
                   <>
                   <ThumbUpAltIcon style={{color:"#2e81f4"}}/>
                   <p style={{color:"#2e81f4",fontWeight:"bold"}}>Like</p>
                   </>
                   ):<><ThumbUpAltIcon/> <p>Like</p></>}
                  
               </div>

               <Link to="/comments/faysal">
               <div className="post__option">
                   <CommentIcon />
                    <p>Comment</p>
               </div>
               </Link>

               <div className="post__option">
                   <ShareIcon />
                    <p>Shere</p>
               </div>

               <div className="post__option">
                   <AccountCircleIcon/>
                   <ExpandMoreIcon />
               </div>

            </div>

        </div>
    )
}

export default Post
