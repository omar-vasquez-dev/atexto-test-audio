import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import { Button, Tooltip } from "antd";

const ButtonStart = () => {
  const { stopRecord } = useAudioRecord();
  return (
    <Tooltip title="Stop record">
      <Button
        size="large"
        className="Rec"
        shape="circle"
        style={{ margin: 4}}
        icon={<div style={{  margin: "auto", backgroundColor: "red", borderRadius: 2, width: 20 , height: 20}}></div>}
        onClick={stopRecord}
      />
    </Tooltip>
  );
};

export default ButtonStart;
