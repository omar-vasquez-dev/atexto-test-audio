import React, { useState, useEffect, useCallback } from "react";
const AudioContext = React.createContext();

export const RECORD_START = "RECORD_START",
  RECORD_STOP = "RECORD_STOP",
  RECORD_PLAY = "RECORD_PLAY";

function AudioContextProvider(props) {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioState, setAState] = useState(RECORD_STOP);
  const [message, setMessage] = useState("Loading ...");

  const resetAudio = () => {
    if (audio != null) {
      setAudio(null);
      setAState(RECORD_STOP);
    }
  };

  const playRecord = () => {
    if (audio != null) {
      audio.play();
      audio.onended = () => {
        audio.currentTime = 0;
        setAudio(audio);
        setAState(RECORD_STOP);
      };
      setAState(RECORD_PLAY);
    }
  };

  const pauseRecord = () => {
    if (audio != null) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(audio);
      setAState(RECORD_STOP);
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
      console.log("stream stream", event);
      setAudioChunks([...audioChunks, event.data]);
    },
    [audioChunks]
  );

  const handleStopMediaRecord = useCallback(() => {
    console.log(audioChunks);
    const audioBlob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
    setAudioBlob(audioBlob);
    const audioUrl = window.URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    setAudio(audio);
  }, [audioChunks]);

  useEffect(() => {
    if (mediaRecorder != null) {
      mediaRecorder.addEventListener("dataavailable", handlerDataAvailable);
      mediaRecorder.onstop = handleStopMediaRecord;
    }
  }, [mediaRecorder, handleStopMediaRecord, handlerDataAvailable]);

  useEffect(() => {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      setMessage(
        "Permision mic record not support Safari, use chrome or firefox"
      );
      return;
    }

    navigator.getUserMedia(
      { audio: true },
      (stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
      },
      () => {
        setMessage("Mic Permission Denied");
      }
    );
  }, []);

  if (mediaRecorder == null) {
    return message;
  }

  return (
    <AudioContext.Provider
      value={{
        mediaRecorder,
        startRecord,
        stopRecord,
        playRecord,
        pauseRecord,
        audio,
        audioState,
        audioBlob,
        resetAudio,
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
