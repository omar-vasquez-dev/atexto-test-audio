import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import { Button, Tooltip } from "antd";
import { PauseOutlined } from "@ant-design/icons";
const ButtonStop = () => {
  const { pauseRecord } = useAudioRecord();
  return (
    <React.Fragment>
      <Tooltip title={"Pause record"}>
        <Button
          size="large"
          shape="circle"
          style={{ margin: 4 }}
          icon={<PauseOutlined />}
          onClick={pauseRecord}
        />
      </Tooltip>
    </React.Fragment>
  );
};

export default ButtonStop;
