import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { Button, Tooltip, notification } from "antd";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import { SaveOutlined } from "@ant-design/icons";


const ButtonSaveAudio = () => {
  const { audioBlob } = useAudioRecord();
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
          data: { audio: base64AudioMessage, name: "audio" },
        });
      };
    }
  };

  useEffect(() => {
    if (data != null) {
      notification.success({
        message: 'Succcess',
        description:
          'Audio save',
      });
    }
  },[data])

  if (error) {
    return "Error save data";
  }

  if (audioBlob == null) return "";

  return (
    <Tooltip title="Save audio">
      <Button
        onClick={handleCreateAudioRecord}
        size="large"
        style={{ margin: 4 }}
        loading={loading}
        icon={<SaveOutlined style={{ fontSize: 30 }} />}
      />
    </Tooltip>
  );
};

export default ButtonSaveAudio;
