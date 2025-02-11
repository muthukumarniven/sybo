import React, { useState, useEffect, useRef } from 'react';
import Images from '../assets/Images';
import Button from '../component/Button';
import { useNavigate } from "react-router-dom";
import Input from '../component/Input'
import Gif from '../component/Gif';
import AudioListen from '../component/AudioListen';

const OpenAiConversation = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    return (
        <div className='question-one-avatar'>
            <div className='bottom-navbar-header'>
                <div className='ai-chat-container d-flex flex-column gap-3'>
                    <div className='d-flex align-items-end justify-content-start gap-2'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>

                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>
                        </div>
                    </div>

                    <div className='d-flex align-items-end justify-content-start gap-2'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>

                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>
                        </div>
                    </div>

                    <div className='d-flex align-items-end justify-content-start gap-2'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>

                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                            <p className='time-text-content mb-0 text-end mt-1'>9.23 PM</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center justify-content-center gap-4 openai-conversation'>
                    {/* <img className='audio-voice-template' src={Images.audio} alt="Sybo GIF" /> */}
                    <div className='audio-speak-container' >
                        <AudioListen />
                    </div>
                    <div className='speak-listen-container' >
                        <Gif />
                    </div>  
                    <div className='d-flex align-items-center justify-content-center flex-column gap-2'>
                        <button className='end-conversation-content'> <img src={Images.cancel} alt="Sybo GIF" />  </button>
                        <p className='end-conversation-title mb-0'>End conversation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenAiConversation