import React, { forwardRef, useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvider';


const Post= forwardRef(({ roomId,profilePic,username,time,text,postImg },ref)=>{

    const [likes, setLikes] =useState(false);

    const likeHandler=()=>{
        if(likes){
            setLikes(false)
        }else{
            setLikes(true)
        }
    }


    const [{user},dispatch]=useStateValue();

const [name,setName] =useState([]);
useEffect(()=>{
    db.collection("post").doc(roomId).onSnapshot(snapshot=>{
        setName((snapshot.data()));
    });
},[])

    const deletePost=()=>{
        if(name.userName===user.displayName|| user.displayName=="Faysal Mridha"){
         alert(`${name.username} Are You sure to Delete The Post`)

        db.collection("post").doc(roomId).delete();
        }else{
            alert("This is not Your post");
        }
 
    }

    return (
        <div className="post" ref={ref}>
            <div className="post__top">
                <Avatar src={profilePic} />
                <div className="postHeader__info">
                    <h3>{username}</h3>
                    <p>{time}</p>
                </div>
                <IconButton onClick={deletePost} className="more__button">
                <MoreVertIcon/>
                </IconButton>
            </div>

            <div className="post__massage">
                <p>{text}</p>
            </div>

            <div className="post__img">
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

               <Link to={`/comments/${roomId}`}>
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
})

export default Post
