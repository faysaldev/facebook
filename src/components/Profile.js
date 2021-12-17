import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IntroCard from './IntroCard';
import HabitCard from './HabitCard';
import CallectionCard from './CallectionCard';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsIcon from '@material-ui/icons/Settings';
import ReorderIcon from '@material-ui/icons/Reorder';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ProfilePost from './ProfilePost';
import Post from './Post';
import { useStateValue } from '../StateProvider';






function Profile() {


    const [{user},dispatch] =useStateValue();

    return (
        <div className="profile">
                <div className="profile__header">
                    <div className="profile__headerTop">
                        <img className="cover__img" src="/cover.jpg"/>
                       <div className="cover__icon">
                       <CameraAltIcon />
                       <p>Edit Cover Photo</p>
                       </div>
                        <div className="profile__img">
                            <Avatar className="profileImg" src={user.photoURL} />
                            <CameraAltIcon className="camera__icon" />
                        </div>

                        <div className="profile__text">
                            <h1>{user.displayName} <span>(Fâïsū)</span></h1>
                            <p>
                            Whèn Yóü-Sèe Mè-Säy MashâAllah..😍<br/>
                            I’amŊot-Iŋseŋsıtıve I’Just Doŋ’ţ-Care😏<br/>
                            Ì ãlwáys-løvë my mōthêr🥰
                            </p>
                            <a href="/">Edit</a>
                        </div>
                    </div>

                    <div className="profile__menu">
                        <nav>
                            <ul>
                                <li>Posts</li>
                                <li>About</li>
                                <li>Friends 1464</li>
                                <li>Photos</li>
                                <li>More <ExpandMoreIcon /></li>
                            </ul>
                        </nav>

                        <div className="profileMenu__right">
                            <Button className="add__storyBtn"> <AddIcon className="add__icon" /> <h3>Add to Story</h3></Button>

                            <Button> <CreateIcon/> <h3>Edit Profile</h3></Button>
                            
                            <Button><MoreHorizIcon/></Button>
                        </div>
                    </div>
                </div>



            <div className="profile__main">

 <div className="profileMain__left">
            <div className="left__information">
                    <h2>Intro</h2>
<IntroCard img="/intro.png" text="Reactjs Developer at" link="Clever Programmer"/>

<IntroCard img="/intro.png" text="Javascript Php at Computer programming" />

<IntroCard img="/intro.png" text="Love Programming at Student in CSE" />

<IntroCard img="/intro.png" text="FACEBOOK VIP account⇨♡♥♡♥♡♥♡♥⇨▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒ Loading→ 100% ☆☆☆☆☆☆→I.Love Music♪♩♬♬♬♬♪♪♪♪♪♪♩♪⇨WelCome Friends☆☆☆☆Love♡You♡StudiedatM.S. University
" />

<IntroCard img="/intro.png" text="Works at █║▌│║█║▌ ★▪▪★ LoAdInG 100% ▂ ▄ ▅ ▆▇ █ AT FaCEbOoK VIP ★▪▪ ▪▪█║.█.█.█.♥▓▋ ▁ACcoUnT ★▪▪ ▪▪★ king ★▪▪ LeAdEr▁▓♡▓▓♡▓──║▌★ I am King Of Facebook Music.
" />        

<IntroCard img="/intro.png" text="Works at Loading.....████████████100%ORIGINAL PROFILE ® ✔ Verified VIPFacebook ACCOUNT.
" />

<IntroCard img="/intro.png" text="Works at ♥♥ ÍÑTÊRÑÂTÍØÑÃL FÃCÊBØØK VÍP ÁÇÇØÛÑT █║▌│█│║▌║││█║▌│ ║█║▌ © ØFFÎÇÍÁL PRØFÌLÈ 2014-2019♥♥
" />

<IntroCard img="/intro.png" text="Works at I Do!Attitude is My Habit i can't change it,I aM NoT WorKimG bcZ i am The KinG of My owN KinGDoM'i Have No nEEd Do aNy work.........,0nly CrazY for U Baby,Student,Work?What the fuck is that?,NoT YeT worKinG!!¡" />

<IntroCard img="/intro.png" text="
Works at My Life My Rule,My Style MyAttitude....******Love Me OrHate Me But Do Not Play WithMe> '(Not Yet Working!!im StillStudying!!i Am Still Youth......IAm Real 100% Love.....So U CanDo Frndzz Ship With Me..*}****at 'Last bench student" />

<IntroCard img="/intro.png" text="FM at ¤¤¤{Wê Ðärk ÑøT WøRk Í åM À StÛÐèñT ØF ThÉ ÝÉàR }}FåÇèBØôK V.Ì.P ÃçØÚñT 99% ØRìÑå£ FåÇèBøÖK ÄÇøùÑT.......[£øVè ËkÀ]
" />

<IntroCard img="/intro.png" text="Name at " link="Faysal Mridha" />

<IntroCard img="/awrd.png" text="Went to " link="Indurkani M.U Model High School" />

<IntroCard img="/home.png" text="Lives in " link="Dhaka, Bangladesh" />

<IntroCard img="/location.png" text="From " link="Indurkani" />

<IntroCard img="/heart.png" text="Single"/>

<IntroCard img="/alerm.png" text="Joined March 2020"/>

<IntroCard img="/follower.png" text="Followed by" link="2,123"/>

<Button  className="pEdit__btn" fullWidth>Edit Details</Button>

        <div className="habit">
        <HabitCard icon="🌏" text="Traveling"/>
        <HabitCard icon="🎒" text="Backpacking"/>
        <HabitCard icon="👟" text="Acroyoga"/>
        <HabitCard icon="🎧" text="Audio Mastering"/>
        <HabitCard icon="🌊" text="Swimming"/>
        <HabitCard icon="🏸" text="Badminton"/>
        <HabitCard see text="See All"/>
        </div>

        <Button  className="pEdit__btn" fullWidth>Edit Hobbise</Button>

        <div className="story__callection">
            <CallectionCard bg="/story.png" text="+2"/>
            <CallectionCard bg="/story2.png" text="+4"/>
            <CallectionCard bg="/story3.png" text="+2"/>
        </div>




</div>      {/*      white background finished */}
 
<div className="heilight__photos">
    <div className="heilighted__text">
        <a href="#">Photos</a>
        <Button style={{color:"#2e81f4"}}>See All Photos</Button>
    </div>
        <div className="helighted__sImg">
            <img src="/h1.jpg" />
            <img src="/h2.jpg" />
            <img src="/h3.jpg" />
            <img src="/h4.jpg" />
            <img src="/h5.jpg" />
            <img src="/h6.jpg" />
            <img src="/h7.jpg" />
            <img src="/h8.jpg" />
            <img src="/h9.jpg" />
        </div>

</div>

 <div className="friend__list">
 <div className="heilighted__text">
        <a href="#">Friends <p>1,462 friends</p></a>
        <Button style={{color:"#2e81f4"}}>See All Friends</Button>
    </div>
        <div className="helighted__sImg friend__card">
            <div className="singleFnd__card">
            <img src="/f1.jpg" />
            <p>Abdullah Al Rahat</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f2.jpg" />
            <p>Naeem Mridha</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f3.jpg" />
            <p>Saiful Islam</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f4.jpg" />
            <p>Aminul Islam Shanto</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f5.jpg" />
            <p>Arif Jaman</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f6.jpg" />
            <p>Juwel Islam</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f7.jpg" />
            <p>Ripon Gazi</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f8.jpg" />
            <p>Alex Harry</p>
            </div>

            <div className="singleFnd__card">
            <img src="/f9.jpg" />
            <p>HM Amir Faysal</p>
            </div>
        </div>      
</div>

<div className="heilight__photos">
    <div className="heilighted__text">
        <a href="#">Life Events</a>
        <Button style={{color:"#2e81f4"}}>See All</Button>
    </div>
        <div className="helighted__sImg event">
            <div className="signle__event">
                <img src="/e1.jpg" />
                <div className="event__info">
                    <img src="/awrd.png"/>
                    <p>Started School at Indurkani M.U Model High School</p>
                    <a>March 3,2020</a>
                </div>
            </div>
        </div>

</div>

</div>

<div className="profileMain__right">

<div className="massage">
    <div className="post__input">
    <Avatar src={user.photoURL} />
    <input type="text" placeholder={`What's on your mind? ${user.displayName}`}/>
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

<div className="profile__postHeader">
    <div className="profile__post__top">
        <h3>Posts</h3>
        <div className="profle__postBtn">
            <Button><FilterListIcon /> <p>Filters</p></Button>
            <Button><SettingsIcon /> <p>Manage Posts</p></Button>
        </div>
    </div>

    <div className="profile__post__bottom">
        
     <div className="profile__post__option profile__option_active">
            <ReorderIcon />
            <p>List View</p>
        </div>
        
          <div className="profile__post__option">
            <ViewModuleIcon />
            <p>Grid View</p>
        </div>  
       

        
    </div>
</div>



<ProfilePost updatePPic={user.photoURL} profilePic={user.photoURL} sidetext="updated his profile picture." username="Faysal Mridha" time="03:30 PM" text="Caption Loading..." postImg="/cover.jpg" />

<ProfilePost profilePic="/profile.jpg"username="Faysal Mridha" time="03:30 PM" text="Alhamdulilah Disney Project have also done🥰🥰🥰 with React, React-router and Firebase.https://mydisney-48d73.web.app/" postImg="https://scontent.fbzl1-1.fna.fbcdn.net/v/t1.6435-0/s600x600/182560294_294280215526089_3095473755492676787_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=09Vi2vbRtTgAX86XGlw&_nc_ht=scontent.fbzl1-1.fna&tp=7&oh=6dc7538672dfe7c399d0c60c8fd75c48&oe=60CC85EB" />

<ProfilePost updatePPic="https://scontent.fbzl1-1.fna.fbcdn.net/v/t1.6435-0/c0.0.834.834a/s526x395/79257781_151513433136102_2772559830174432008_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=1NY81ZZ4gNsAX-i8Dj2&_nc_ht=scontent.fbzl1-1.fna&tp=28&oh=e058298792dd543802c384ebe2858f63&oe=60CA277C" profilePic="/profile.jpg" sidetext="updated his profile picture." username="Faysal Mridha" time="03:30 PM" text="SOMETIMES YOU GOTTA LISTEN TO YOUR BRAIN JUST TO SAVE YOUR HEART.
Edit ;Naeem Islam abir vai" postImg="/cover.jpg" />

<ProfilePost updatePPic="https://scontent.fbzl1-1.fna.fbcdn.net/v/t1.6435-0/c0.253.720.720a/s526x395/122897610_184652873155491_7119580501547001378_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=cfwDmdy2kTMAX9GCX1U&_nc_ht=scontent.fbzl1-1.fna&tp=28&oh=614a2dfe7f4bbec77bdd73dc75364471&oe=60CB41C1" profilePic="/profile.jpg" sidetext="updated his profile picture." username="Faysal Mridha" time="03:30 PM" text="SOMETIMES YOU GOTTA LISTEN TO YOUR BRAIN JUST TO SAVE YOUR HEART.
Edit ;Naeem Islam abir vai" postImg="/cover.jpg" />

<ProfilePost profilePic="/profile.jpg"username="Faysal Mridha" time="03:30 PM" text="Alhamdulilah Disney Project have also done🥰🥰🥰 with React, React-router and Firebase.https://mydisney-48d73.web.app/" postImg="https://scontent.fbzl1-1.fna.fbcdn.net/v/t1.6435-0/p180x540/122768381_184643593156419_3871506712432009405_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=7ZhWWq5NaJQAX9A5_Sl&_nc_ht=scontent.fbzl1-1.fna&tp=6&oh=df7825d7531f1d5ec7b5379e1860d83c&oe=60CC5E64" />

</div>
   </div>

     </div>
    )
}

export default Profile
