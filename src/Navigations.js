import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionOne from './screens/QuestionOne';

const Navigations = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<MainHome />} /> */}
                    <Route path='/' element={<QuestionOne />} />


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navigations