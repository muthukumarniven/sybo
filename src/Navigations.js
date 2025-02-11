import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionOne from './screens/QuestionOne';
import VideoAudioRecorder from './screens/VideoAudioRecorder';
import QuestionAvatarVideo from './screens/QuestionAvatarVideo';
import OpenAiConversation from './screens/OpenAiConversation';

const Navigations = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<MainHome />} /> */}
                    <Route path='/' element={<QuestionOne />} />
                    <Route path='/video' element={<VideoAudioRecorder />} />
                    <Route path='/avatar-video' element={<QuestionAvatarVideo />} />
                    <Route path='/openai' element={<OpenAiConversation />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navigations