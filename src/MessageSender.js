import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();


        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })
        setInput('');
        setImageURL('');
    }


    return (
        <div style={{ "width": "100%" }}>
            <div className="messageSender">
                <div className="messenger__mobile">
                    <div className="messageSender__top">
                        <Avatar src={user.photoURL} />
                        <form>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                className="messageSender__input"
                                type="text"
                                name=""
                                placeholder={`What's on your mind, ${user.displayName} ?`}
                                id="" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="messageSender">

                <div className="messenger__desktop">

                    <div className="messageSender__top">
                        <Avatar src={user.photoURL} />
                        <form>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                className="messageSender__input"
                                type="text"
                                name=""
                                placeholder={`What's on your mind, ${user.displayName} ?`}
                                id="" />
                            <input
                                onChange={(e) => setImageURL(e.target.value)}
                                value={imageURL}
                                className="messageSender__input"
                                type="text"
                                name=""
                                placeholder="image URL"
                                id="" />
                            <button className="messageSender__button" onClick={handleSubmit}>Handle Submt</button>
                        </form>
                    </div>
                    <div className="messageSender__bottom">
                        <div className="messageSender__option">
                            <VideocamIcon style={{ color: "red" }} />
                            <h3>Live Video</h3>
                        </div>
                        <div className="messageSender__option">
                            <PhotoIcon style={{ color: "green" }} />
                            <h3>Photo/Video</h3>
                        </div>
                        <div className="messageSender__option">
                            <InsertEmoticonIcon style={{ color: "orange" }} />
                            <h3>Feeling/Activity</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MessageSender
