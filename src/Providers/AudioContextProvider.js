import React, { useState, useEffect, useCallback } from "react";
const AudioContext = React.createContext();

const RECORD_START = "RECORD_START",
  RECORD_STOP = "RECORD_STOP",
  RECORD_PLAY = "RECORD_PLAY";

function AudioContextProvider(props) {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [audioState, setAState] = useState(RECORD_STOP);

  const playRecord = () => {
    if (audio != null) {
      audio.play();
      setAState(RECORD_PLAY);
    }
  };

  const startRecord = () => {
    setAudioChunks([]);
    mediaRecorder.start();
    setAState(RECORD_START);
  };

  const stopRecord = () => {
    if (mediaRecorder != null) {
      mediaRecorder.stop();
      setAState(RECORD_STOP);
    }
  };

  const handlerDataAvailable = useCallback(
    (event) => {
      setAudioChunks([...audioChunks, event.data]);
    },
    [audioChunks]
  );

  const handleStopMediaRecord = useCallback(() => {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    setAudio(audio);
  }, [audioChunks]);

  useEffect(() => {
    if (mediaRecorder != null) {
      mediaRecorder.addEventListener("dataavailable", handlerDataAvailable);
      mediaRecorder.addEventListener("stop", handleStopMediaRecord);
    }
  }, [mediaRecorder, handleStopMediaRecord, handlerDataAvailable]);

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      (stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
      },
      () => {
        console.log("Mic Permission Denied");
      }
    );
  }, []);

  if (mediaRecorder == null) {
    return "Mic Permission Denied";
  }

  return (
    <AudioContext.Provider
      value={{
        mediaRecorder,
        startRecord,
        stopRecord,
        playRecord,
        audio,
        audioState,
      }}
      {...props}
    />
  );
}

function useAudioRecord() {
  const context = React.useContext(AudioContext);
  if (context === undefined) {
    throw new Error(
      `useAudioContext must be used within a AudioContextProvider`
    );
  }
  return context;
}

export { AudioContextProvider, useAudioRecord };
