import { Avatar, Button } from '@material-ui/core';
import React, { forwardRef, useEffect, useState } from 'react';
import MassageSender from '../MassageSender';
import './Comment.css'
import Post from './Post';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

const Comment=()=> {

    const [{user},dispatch] =useStateValue();

    const {postId} =useParams();

    const [comment, setComment] =useState([]);

    const [commentDetails, setcommentDetails]=useState("");

    const [commentInput, setCommentInput] =useState("");


const addComment=(e)=>{
    e.preventDefault();

    db.collection("post").doc(postId).collection("comments").add({
        name:user.displayName,
        text:commentInput,
        profileimg:user.photoURL,
    });

    setCommentInput("");
}



useEffect(() => {

db.collection("post").doc(postId).onSnapshot(snapshot=>{
    setcommentDetails((snapshot.data()))
})

db.collection('post').doc(postId).collection('comments').onSnapshot(snapshot => (
    setComment(snapshot.docs.map(doc => doc.data()))
));

}, [postId])

console.log(postId);

    return (
      <div className="feed comment">
            <Post profilePic={commentDetails.profilePic} username={commentDetails.username} time={new Date(commentDetails.time?.toDate()).toUTCString()} text={commentDetails.text} postImg={commentDetails.postImg} />

            <div className="commmets__area">

                  {comment.map(comments=>(<div className="comment__text">
                <Avatar src={comments.profileimg}/>
                <p> <b>{comments.name}</b> {comments.text}</p>

          
            </div>))}

            <form>
                <input type="text" placeholder="Type a comment..." onChange={e => setCommentInput(e.target.value)} value={commentInput} />
                <Button disabled={!commentInput} type="submit" onClick={addComment}>
                    <SendIcon /></Button>
            </form>

            </div>

        </div>
    )
}

export default Comment
