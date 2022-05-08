import React, { FunctionComponent } from 'react';

export const Content: FunctionComponent = (props) => (
  <div className="content">
    {props.children}
  </div>
)