import React from "react";
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from "antd";

import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter, Routes, useNavigate } from "react-router-dom";

function Navigation() {
  let navigate = useNavigate();
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon: React.ReactNode,
    onClick: Function
  ): MenuItem {
    return {
      key,
      icon,
      label,
      onClick
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('First App', '1', <PieChartOutlined />, () => navigate(`/`)),
    getItem('Second App', '2', <DesktopOutlined />, () => navigate(`/second`)),
  ];


  return (
    <Layout className="mf-navigation">
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Layout>
  )
}

export default function Root() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}