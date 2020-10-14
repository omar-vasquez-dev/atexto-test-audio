import useAxios from "axios-hooks";
import React from "react";
import { List, Skeleton, Row, Input, Col, Radio, Button, Divider } from "antd";
import NameEditable from "./NameEditable";
import {
  AudioOutlined,
  ReloadOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import ButtonAudioDelete from "./ButtonAudioDelete";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import moment from "moment";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const baseUrl = "http://localhost:3333/audio/all";

const options = [
  { label: "Sort by creation date", value: "CREATED" },
  { label: "Sort by name", value: "ALPHABETH" },
];

const ListAudio = () => {
  const { audio } = useAudioRecord();
  const [orderBy, setOrderBy] = React.useState("CREATED");
  const [search, setSearch] = React.useState("");
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: baseUrl,
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    { manual: true }
  );

  const handleUpdate = () => {
    refetch();
  };

  React.useEffect(() => {
    if (audio === null) {
      refetch();
    }
  }, [audio, refetch]);

  React.useEffect(() => {
    refetch({ params: { orderBy, search } });
  }, [search, refetch, orderBy]);

  const handleChangeOrderBy = (value) => {
    setOrderBy(value.target.value);
  };

  if (error) return <p>Error!</p>;

  return (
    <div style={{ background: "white", padding: 16 }}>
      <Row>
        <Col span={24}>
          <Search
            placeholder="Search audio"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={setSearch}
          />
          <Divider></Divider>
          <Radio.Group
            options={options}
            onChange={handleChangeOrderBy}
            value={orderBy}
            optionType="button"
          />
          <Button onClick={handleUpdate} icon={<ReloadOutlined />}></Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item._id}
                actions={[
                  <ButtonAudioDelete
                    audioId={item._id}
                    update={handleUpdate}
                  ></ButtonAudioDelete>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={
                      <NameEditable
                        audioId={item._id}
                        name={item.name}
                      ></NameEditable>
                    }
                    avatar={<SoundOutlined />}
                    description={
                      <React.Fragment>
                        <audio
                          type="audio/ogg; codecs=opus"
                          id={`audio-player-${item._id}`}
                          controls="controls"
                          src={`http://localhost:3333/audio/file/${item.metadata}`}
                        ></audio>
                      </React.Fragment>
                    }
                  />
                  Created: {moment(item.created_at).fromNow()}
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ListAudio;
