import React, { useState } from "react";
import { Typography, Modal } from "antd";
import useAxios from "axios-hooks";
const { Paragraph } = Typography;

function errorUpdate() {
  Modal.error({
    content: "Delete audio error",
  });
}

const NameEditable = ({ name, audioId }) => {
  const [editableStr, setEditableStr] = useState(name);
  const [{ data, error }, executePost] = useAxios(
    {
      url: "http://localhost:3333/audio/update_name",
      method: "POST",
    },
    { manual: true }
  );

  React.useEffect(() => {
    if (error) {
      errorUpdate();
    }
  }, [data, error]);

  React.useEffect(() => {
    if (editableStr.length <= 0) return;
    executePost({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: { name: editableStr, _id: audioId },
    });
  }, [editableStr, audioId, executePost]);

  return (
    <React.Fragment>
      <Paragraph editable={{ onChange: setEditableStr }}>
        {editableStr}
      </Paragraph>
    </React.Fragment>
  );
};

export default NameEditable;
