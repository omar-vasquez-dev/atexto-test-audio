import React from "react";
import { Button, Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";

const ButtonRemoveAudio = () => {
  const { audio, resetAudio } = useAudioRecord();
  return (
    <Tooltip title="Delete current record">
      <Button
        style={{ cursor: "pointer", margin: 4 }}
        size="large"
        shape="circle"
        icon={<CloseOutlined />}
        disabled={audio == null}
        onClick={resetAudio}
      />
    </Tooltip>
  );
};

export default ButtonRemoveAudio;
