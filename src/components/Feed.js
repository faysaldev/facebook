import React, { useEffect, useState } from 'react'
import MassageSender from '../MassageSender';
import './Feed.css'
import Post from './Post';
import StoryReel from './StoryReel';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {

const [posts,setPosts] =useState([]);
const [id,setId]=useState([]);

useEffect(()=>{

db.collection('post').onSnapshot((snapshot)=>{
    setPosts(snapshot.docs.map(doc=>(
        {
            id:doc.id,
            data:doc.data()
        }
    )))
})

},[])

    return (
      <div className="feed">
            <StoryReel />
            <MassageSender />
            {/* {post.map(doc=>(<Post key={doc.text} profilePic={doc.profilePic} username={doc.doc} time={doc.time} text={doc.text} postImg={doc.postImg} />))} */}

            <FlipMove>
            {posts.map(post=>(<Post roomId={post.id} time={new Date(post.time?.toDate()).toUTCString()} key={post.id} profilePic={post.data.profilePic} username={post.data.username} text={post.data.text} postImg={post.data.postImg} />))}
            </FlipMove>

        </div>
    )
}

export default Feed
            
            // <Post profilePic="/user.jpg" username="faysal" time="03:30 PM" text="Not Upload img" postImg="" />