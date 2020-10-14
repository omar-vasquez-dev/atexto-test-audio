import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { Button, Tooltip, notification, Modal, Input } from "antd";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import { CloudUploadOutlined } from "@ant-design/icons";

const ButtonSaveAudio = () => {
  const [open, setOpen] = React.useState(false);
  const [nameAudio, setNameAudio] = React.useState("");
  const { audioBlob, resetAudio } = useAudioRecord();
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: "http://localhost:3333/audio/create",
      method: "POST",
    },
    { manual: true }
  );

  const handleCreateAudioRecord = () => {
    if (audioBlob != null) {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onload = () => {
        const base64AudioMessage = reader.result.split(",")[1];
        executePost({
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          data: {
            audio: base64AudioMessage,
            name: nameAudio.length ? nameAudio : "Audio record",
          },
        });
      };
    }
  };

  useEffect(() => {
    if (data != null) {
      setOpen(false);
      resetAudio();
      notification.success({
        message: "Succcess",
        description: "Audio uploaded",
      });
    }
  }, [data, resetAudio, setOpen]);

  if (error) {
    return "Error save data";
  }

  if (audioBlob == null) return "";

  return (
    <React.Fragment>
      <Tooltip title="Upload audio">
        <Button
          onClick={() => setOpen(true)}
          size="large"
          style={{ margin: 4 }}
          loading={loading}
          shape="circle-outline"
          ghost
          icon={
            <CloudUploadOutlined style={{ fontSize: 28, color: "#87e8de" }} />
          }
        />
      </Tooltip>
      <Modal
        title="New audio"
        visible={open}
        onOk={handleCreateAudioRecord}
        onCancel={() => setOpen(false)}
        okText="Upload"
        cancelText="Cancel"
      >
        <p>Required name</p>
        <Input
          placeholder="Audio name"
          onChange={(v) => setNameAudio(v.target.value.trim())}
        />
      </Modal>
    </React.Fragment>
  );
};

export default ButtonSaveAudio;
