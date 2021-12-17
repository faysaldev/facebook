import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Story({me, bg,img,title,id }) {

    const [{user},dispatch]=useStateValue();


    const addStoryHandler=()=>{
        const storyImg =prompt("Story img Link");
       if(storyImg){
        db.collection("story").add({
            name:user.displayName,
            profileimg:user.photoURL,
            bg:storyImg
        })
       }
    }


    const [username,setusername]=useState([]);

const deleteStory=()=>{


    db.collection("story").doc(id).onSnapshot(snapshot=>{
        setusername(snapshot.data());
    })

if(username.name===user.displayName || user.displayName=="Faysal Mridha"){
    alert(`${user.displayName}Are you sure to Delete the Story`);

    db.collection("story").doc(id).delete();
}

}

    return (
        <div onDoubleClick={deleteStory} className="story" style={{backgroundImage: `url(${bg})`}}>
            <Avatar src={img}/>
            {me && (<div className="your__story">
            <AddIcon onClick={addStoryHandler} />
                </div>)}
            <h4 className={` democlass ${me && "yourStory"}`}>{title}</h4>
        </div>
    )
}

export default Story
