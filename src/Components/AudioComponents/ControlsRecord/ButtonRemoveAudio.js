import React from "react";
import { Button, Tooltip } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';
import { useAudioRecord } from "../../../Providers/AudioContextProvider";

const ButtonRemoveAudio = () => {
  const { startRecord } = useAudioRecord();
  return (
    <Tooltip title="Delete current record">
      <CloseCircleOutlined  style={{ fontSize: "48px", color:"gray", cursor:"pointer"}}/>
    </Tooltip>
  );
};

export default ButtonRemoveAudio;