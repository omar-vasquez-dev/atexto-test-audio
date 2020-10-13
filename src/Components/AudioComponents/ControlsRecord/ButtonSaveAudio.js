import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";

const ButtonSaveAudio = () => {
  const { audioBlob } = useAudioRecord();
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: "http://localhost:3333/audio/create",
      method: "POST",
    },
    { manual: true }
  );

  const handleCreateAudioRecord = () => {
    if (audioBlob != null) {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onload = () => {
        const base64AudioMessage = reader.result.split(",")[1];

        executePost({
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          data: { audio: base64AudioMessage, name: "audio" },
        });
      };
    }
  };

  if (loading) {
    return <button>Loading...</button>;
  }

  if (error) {
    return "Error save data";
  }

  if (data != null) {
    return "Save success";
  }

  if (audioBlob == null) return "";

  return <button onClick={handleCreateAudioRecord}>Save Audio</button>;
};

export default ButtonSaveAudio;
