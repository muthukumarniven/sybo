import React from 'react'
import myVideo from "../assets/videos/founders-video.mp4"; // Import the video

const QuestionAvatarVideo = () => {
    return (
        // <div className='question-one-avatar'>
        <div style={{ height: "100vh" }} className='avatarr-v'>
            <video style={{ height: "100%" }} width="100%" height="auto" controls>
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='bottom-navbar-header'>
            </div>
        </div>
    )
}

export default QuestionAvatarVideo