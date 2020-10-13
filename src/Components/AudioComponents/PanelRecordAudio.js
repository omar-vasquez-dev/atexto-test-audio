import React from "react";
import { AudioContextProvider } from "../../Providers/AudioContextProvider";
import ControlPlay from "./ControlsRecord/ControlPlay";
import ControlRecording from "./ControlsRecord/ControlRecording";
import ControlSave from "./ControlsRecord/ControlSave";
import ListAudio from "./ListAudios/ListAudio";
import { Row, Col , Divider} from 'antd';

const PanelRecordAudio = () => {
  return (
    <AudioContextProvider>
      <Row gutter={16} justify="center" align="top">
        <Col span={2}>
        <ControlPlay></ControlPlay>
        </Col>
      <Col span={2}>
      <ControlRecording></ControlRecording>
      </Col>
      <Col span={2}>
        <ControlPlay></ControlPlay>
      </Col>
      <Col span={2}>
      <ControlSave></ControlSave>
      </Col>
    </Row>
    <Divider orientation="left">Records</Divider>
    <Row>
      <Col span={20}>
      <ListAudio></ListAudio>

      </Col>
    </Row>
    </AudioContextProvider>
  );
};

export default PanelRecordAudio;
