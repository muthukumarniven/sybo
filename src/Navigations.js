import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionOne from './screens/QuestionOne';
import VideoAudioRecorder from './screens/VideoAudioRecorder';
import QuestionAvatarVideo from './screens/QuestionAvatarVideo';

const Navigations = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<MainHome />} /> */}
                    <Route path='/' element={<QuestionOne />} />
                    <Route path='/video' element={<VideoAudioRecorder />} />
                    <Route path='/avatar-video' element={<QuestionAvatarVideo />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navigations