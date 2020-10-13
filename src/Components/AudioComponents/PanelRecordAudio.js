import React from "react";
import { AudioContextProvider } from "../../Providers/AudioContextProvider";
import ControlPlay from "./ControlsRecord/ControlPlay";
import ControlRecording from "./ControlsRecord/ControlRecording";
import ControlSave from "./ControlsRecord/ControlSave";
import ListAudio from "./ListAudios/ListAudio";

const PanelRecordAudio = () => {
  return (
    <AudioContextProvider>
      <ControlRecording></ControlRecording>
      <ControlPlay></ControlPlay>
      <ControlSave></ControlSave>
      <hr></hr>
      <ListAudio></ListAudio>
    </AudioContextProvider>
  );
};

export default PanelRecordAudio;
