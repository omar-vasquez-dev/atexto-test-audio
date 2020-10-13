import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const Template = ({ children }) => {
  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Atexto test audio</Footer>
    </Layout>
  );
};

export default Template;
