import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import useStateRecordingAudio from "../hooks/useStateRecordingAudio";
import { Typography } from "antd";
const { Text } = Typography;
const SecondsCounter = ({ title }) => {
  const counter = useStateRecordingAudio();
  return <Text strong>{`${counter} sec. ${title} `}</Text>;
};

const DisplayStatusRecord = () => {
  const { audioState } = useAudioRecord();

  if (audioState === "RECORD_START")
    return <SecondsCounter title="Recording ..." />;

  if (audioState === "RECORD_STOP") return "Pause";

  if (audioState === "RECORD_PLAY")
    return <SecondsCounter title="Playing ..." />;

  return "";
};

export default DisplayStatusRecord;
