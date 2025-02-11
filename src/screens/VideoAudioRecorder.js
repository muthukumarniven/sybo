

import React, { useState, useRef, useEffect } from "react";

const VideoAudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState(null);
    const [audioURL, setAudioURL] = useState(null);
    const [mediaStream, setMediaStream] = useState(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const mediaRecorderRef = useRef(null);
    const videoRef = useRef(null);
    const chunks = useRef([]);

    // Start capturing media
    const startCapture = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            setMediaStream(stream);
            setIsCapturing(true);
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error("Error accessing media devices: ", error);
        }
    };

    // Stop capturing media
    const stopCapture = () => {
        if (mediaStream) {
            mediaStream.getTracks().forEach((track) => track.stop());
            setIsCapturing(false);
        }
    };

    // Start recording
    const startRecording = () => {
        if (!mediaStream) return;
        setRecording(true);
        chunks.current = [];
        const mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.current.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks.current, { type: "video/webm" });
            const videoUrl = URL.createObjectURL(blob);
            setVideoURL(videoUrl);
            setAudioURL(videoUrl); // Audio is included in video
        };

        mediaRecorder.start();
    };

    // Stop recording
    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    // Pay-to-text simulation
    const payToConvertText = () => {
        alert("Payment successful! Processing audio-to-text...");
        // Implement AI transcription logic here
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Video & Audio Recorder</h2>

            <div className="mt-2">
                <button
                    className="bg-green-500 text-white p-2 rounded mr-2"
                    onClick={startCapture}
                >
                    Start Capture
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={stopCapture}
                    disabled={!isCapturing}
                >
                    Stop Capture
                </button>
            </div>

            {isCapturing && (
                <div className="mt-2">
                    <button
                        className="bg-blue-500 text-white p-2 rounded mr-2"
                        onClick={startRecording}
                        disabled={recording}
                    >
                        Start Recording
                    </button>
                    <button
                        className="bg-orange-500 text-white p-2 rounded"
                        onClick={stopRecording}
                        disabled={!recording}
                    >
                        Stop Recording
                    </button>
                </div>
            )}

            <p className="mt-2">
                Video: {isCapturing ? "Capturing..." : "Stopped"} | Audio:{" "}
                {isCapturing ? "Capturing..." : "Stopped"}
            </p>

            <div className="mt-4">
                <video ref={videoRef} autoPlay playsInline className="w-64 border" />
            </div>

            {videoURL && (
                <div className="mt-4">
                    <h3>Recorded Video:</h3>
                    <video src={videoURL} controls className="w-64 border" />
                </div>
            )}

            {audioURL && (
                <div className="mt-4">
                    <h3>Recorded Audio:</h3>
                    <audio src={audioURL} controls />
                </div>
            )}

            {audioURL && (
                <button
                    className="bg-purple-500 text-white p-2 rounded mt-4"
                    onClick={payToConvertText}
                >
                    Pay to Convert to Text
                </button>
            )}
        </div>
    );
};

export default VideoAudioRecorder;
