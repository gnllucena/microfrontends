import React, { FunctionComponent, useState } from 'react';
import { Drawer as DrawerAntd } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './Drawer.scss';

export interface DrawerProps {
  title: string,
  placement: 'top' | 'right' | 'bottom' | 'left'
  width?: number,
  height?: number,
  visible: boolean,
  onClose(): void
}

export const Drawer: FunctionComponent<DrawerProps> = (props) => (
  <DrawerAntd
    placement={props.placement}
    closable={false}
    onClose={props.onClose}
    width={`${props.width}px`}
    height={`${props.height}px`}
    className="drawer-wrapper"
    visible={props.visible}
    destroyOnClose={true}
  >
    <div className="drawer-header-wrapper">
      <div className="drawer-title-wrapper">
        <h2 className="drawer-title">{props.title}</h2>
      </div>
      <div className="drawer-close-wrapper">
        <button onClick={props.onClose} type="button">
          <CloseOutlined />
        </button>
      </div>
    </div>

    <div className="drawer-clear" />

    <div className="drawer-children-wrapper">
      {props.children}
    </div>
  </DrawerAntd>
);