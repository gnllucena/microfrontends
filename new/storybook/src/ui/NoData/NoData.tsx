import React, { FunctionComponent } from 'react';
import { Empty } from 'antd';

import './NoData.scss';

export interface NoDataProps {
  text: string
}

export const NoData: FunctionComponent<NoDataProps> = ({ 
  text
}) => (
  <Empty 
    className="no-data"
    description={text}
  />
);
