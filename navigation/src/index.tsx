import React from "react";
import { UserOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from "antd";

import "antd/dist/antd.css";
import "./index.css";

export default function Root() {
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('First App', '1', <PieChartOutlined />),
    getItem('Second App', '2', <DesktopOutlined />),
  ];


  return (
    <Layout className="mf-navigation">
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Layout>
  )
}