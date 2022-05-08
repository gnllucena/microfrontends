import React, { FunctionComponent } from 'react';

import './Loading.scss';

export const Loading: FunctionComponent = () => {
  const logo = require('../../../assets/images/loading.svg') as string;

  return (
    <div className="loading-wrapper">
      <img src={logo} alt="loading" />
    </div>
  )
};
