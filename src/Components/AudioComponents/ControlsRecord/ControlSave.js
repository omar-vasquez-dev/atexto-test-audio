import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import ButtonSaveAudio from "./ButtonSaveAudio";

const ControlSave = () => {
  const { audio } = useAudioRecord();
  if (audio == null) return "";
  return <ButtonSaveAudio></ButtonSaveAudio>;
};

export default ControlSave;
