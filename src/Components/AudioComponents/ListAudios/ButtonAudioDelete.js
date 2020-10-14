/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button } from "antd";
import { notification, Modal } from "antd";
import { ExclamationCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import useAxios from "axios-hooks";
const { confirm } = Modal;

const ButtonAudioDelete = ({ audioId, update }) => {
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: "http://localhost:3333/audio/delete",
      method: "POST",
    },
    { manual: true }
  );

  React.useEffect(() => {
    if (data) {
      notification.success({
        message: "Success",
        description: "Audio deleted ",
      });
      update();
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      notification.error({
        message: "Error",
        content: "Delete audio error",
      });
      update();
    }
  }, [error]);

  function handleConfirmDeleteItem() {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this audio?",
      onOk() {
        executePost({
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          data: { audioId },
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <React.Fragment>
      <Button
        onClick={handleConfirmDeleteItem}
        danger
        shape="round"
        icon={<DeleteOutlined />}
        loading={loading}
      >
        Delete
      </Button>
    </React.Fragment>
  );
};

export default ButtonAudioDelete;
