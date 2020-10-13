import React from "react";
import { Button, Tooltip } from "antd";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";

const ButtonRecord = ({ disabled = false}) => {
  const { startRecord } = useAudioRecord();
  return (
    <Tooltip title="Record">
      <Button
        onClick={startRecord}
        size="large"
        className="noRec"
        shape="circle"
        disabled={disabled}
        style={{ margin: 4 }}
        icon={<div style={{  margin: "auto", backgroundColor: "red", borderRadius: 10, width: 20 , height: 20}}></div>}
      />
    </Tooltip>
  );
};

export default ButtonRecord;
