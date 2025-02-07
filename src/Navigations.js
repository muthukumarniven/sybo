import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionOne from './screens/QuestionOne';
import VideoAudioRecorder from './screens/VideoAudioRecorder';

const Navigations = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<MainHome />} /> */}
                    <Route path='/' element={<QuestionOne />} />
                    <Route path='/video' element={<VideoAudioRecorder/>}/>


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navigations