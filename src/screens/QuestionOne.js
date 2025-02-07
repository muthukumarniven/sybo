import Input from '../component/Input'
import React, { useState } from "react";
import Images from '../assets/Images';
import Button from '../component/Button';

const QuestionOne = () => {
    const [fullName, setFullName] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    return (
        <div className='question-one-avatar'>
            <div className='bottom-navbar-header'>
                <div className='ai-chat-container d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div className='ai-chat-item'>
                            <p className='mb-0'>What specific challenge are you facing
                                right now?</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-end gap-2'>
                        <Button backgroundColor='#D9D9D9' buttonWidth='23px' buttonHeight='23px' imgWidth='8px' imgHeight='8px' imageSrc={Images.edit} />
                        <div className='user-chat-item'>
                            <p className='mb-0'>Relationship</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 bottom-navbar-conatiner'>
                    <Input imageSrc={Images.newImage} marginTop='0px' placeholder='Write a message...' onChange={handleFullNameChange} />
                    <Button imageSrc={Images.speak} />
                </div>
            </div>
        </div>
    )
}

export default QuestionOne