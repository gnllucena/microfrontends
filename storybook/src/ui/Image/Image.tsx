
import React, { FunctionComponent } from 'react'
import { Image as ImageAntd, Space } from 'antd';

import './Image.scss';

export interface ImageProps {
  src: string,
  preview: boolean
  onClick?(src: string): void
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  preview,
  onClick
}) => (
  <Space size={12}>
    <ImageAntd
      src={`${process.env.URL_IMAGES}/${src}`}
      preview={preview}
      onClick={() => { 
        if (onClick) {
          onClick(src);
        }
      }}
      placeholder={
        <ImageAntd
          preview={preview}
          src={`${process.env.URL_IMAGES}/${src}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
        />
      }
    />
  </Space>
)