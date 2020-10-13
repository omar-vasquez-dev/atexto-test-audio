import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";

const ButtonRecord = () => {
  const { startRecord } = useAudioRecord();
  return <button onClick={startRecord}>Record</button>;
};

export default ButtonRecord;
