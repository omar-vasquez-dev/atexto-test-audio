import useAxios from "axios-hooks";
import React from "react";
import ItemAudio from "./ItemAudio";
import { List, Skeleton, Button } from "antd";
import NameEditable from "./NameEditable";
import {
  PlayCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ListAudio = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: "http://localhost:3333/audio/all",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const loadMore = () => {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item._id}
            actions={[
              <a key="list-loadmore-edit">
                <EditOutlined />
              </a>,
              <a key="list-loadmore-more">
                <DeleteOutlined />
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Button
                    size={"large"}
                    icon={
                      <PlayCircleOutlined
                        style={{ fontSize: "30px", color: "gray" }}
                      />
                    }
                  ></Button>
                }
                title={<NameEditable name={item.name}></NameEditable>}
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
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListAudio;
