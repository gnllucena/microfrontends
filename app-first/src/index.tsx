import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

import "antd/dist/antd.css";
import "./index.css";

export default function Root() {
  
  return (
    <Layout className="mf-app-first site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>First</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background content" style={{ padding: 24, minHeight: 360 }}>
          This is the first app.          
        </div>
      </Content>
    </Layout>
  )
}