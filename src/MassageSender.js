import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';
import db from './firebase';

function MassageSender() {

    const [text,setText] =useState('');
    const [imgUrl,setimgUrl] =useState('');

    const [{user}, dispatch] =useStateValue();

    const clickHandler= (e)=>{
        e.preventDefault();
       

db.collection("post").add({

    postImg:imgUrl,
    profilePic:user.photoURL,
    text:text,
    username:user.displayName,

})

        setText("");
        setimgUrl("");
}

    return (
        <div className="massage">
            <div className="massage__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input style={{flex:1,marginRight:"3px"}} value={text} placeholder={`What's on your mind? ${user.displayName}`} onChange={e => setText(e.target.value)} />
                    <input value={imgUrl} placeholder={`Images url : Option()`} onChange={e => setimgUrl(e.target.value)} />

                    <button type="submit" onClick={clickHandler} style={{display:"none"}}>Post</button>
                </form>
            </div>
            <div className="massgae__bottom">
                <div className="massage__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="massage__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="massage__option">
                    <EmojiEmotionsIcon style={{color:"orange"}}/>
                    <h3>Felling /Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MassageSender
