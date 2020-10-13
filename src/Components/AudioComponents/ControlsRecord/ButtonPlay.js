import React, { useState } from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import {Tooltip,Button} from 'antd';
import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons"

const ButtonPlay = ({ disabled = false }) => {
  const { playRecord } = useAudioRecord();
  const [playing, setPlaying] = useState(false);

  return (
    <Tooltip title={playing ? "Pause record" : "Play record"}>
      <Button
        size="large"
        shape="circle"
        style={{ margin: 4 }}
        icon={ playing ? <PauseOutlined /> : <CaretRightOutlined />}
        disabled={disabled}
        onClick={() => {
          playRecord();
          setPlaying(true);
        }}
      />
    </Tooltip>
  );
};

export default ButtonPlay;
