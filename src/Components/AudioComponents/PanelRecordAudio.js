import React from "react";
import { AudioContextProvider } from "../../Providers/AudioContextProvider";
import ControlPlay from "./ControlsRecord/ControlPlay";
import ControlRecording from "./ControlsRecord/ControlRecording";
import ControlSave from "./ControlsRecord/ControlSave";
import ListAudio from "./ListAudios/ListAudio";
import { Row, Col, Divider, Card } from "antd";
import ButtonRemoveAudio from "./ControlsRecord/ButtonRemoveAudio";
import DisplayStatusRecord from "./ControlsRecord/DisplayStatusRecord";

const PanelRecordAudio = () => {
  return (
    <AudioContextProvider>
      <Row gutter={16} justify="center" align="top">
        <Col span={14}>
          <Card title={<DisplayStatusRecord></DisplayStatusRecord>}>
            <Row gutter={22} justify="center" align="top">
              <Col span={2}>
                <ButtonRemoveAudio></ButtonRemoveAudio>
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
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={14}>
          <Divider orientation="left">Records</Divider>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={14}>
          <ListAudio></ListAudio>
        </Col>
      </Row>
    </AudioContextProvider>
  );
};

export default PanelRecordAudio;
