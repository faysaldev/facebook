import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import Story from './Story';


function StoryReel() {

const [story,setStory] =useState([]);

    useEffect(()=>{

db.collection("story").onSnapshot((snapshot)=>{
setStory(snapshot.docs.map(doc=> ({
    id:doc.id,
    data:doc.data(),
})))
})

    },[])
    const [{user},dispacth] =useStateValue();

    return (
            <div className="storyReel">
            <Story me bg={user.photoURL} img={user.photoURL} title="Your Story" />
            
            {story.map(sStory=> (<Story id={sStory.id} bg={sStory.data.bg} img={sStory.data.profileimg} title={sStory.data.name} />))}
        </div>
    )
}

export default StoryReel
