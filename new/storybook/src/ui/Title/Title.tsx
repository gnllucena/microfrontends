import React, { FunctionComponent } from 'react';

import './Title.scss';

export interface TitleProps {
  title: string
}

export const Title: FunctionComponent<TitleProps> = ({
  title
}) => {
  return (
    <div className="title-wrapper">
      <h2>{title}</h2>
    </div>
  )
};
