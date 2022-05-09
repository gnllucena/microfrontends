import React, { FunctionComponent, useState } from 'react';
import { Upload as UploadAntd } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';

import './Upload.scss';

export interface UploadProps {
  name: string,
  url: string,
  params?: Array<string>,
  extensions: string,
  multiple?: boolean,
  disabled?: boolean,
  onStart?(files: string): void,
  onSuccess?(files: string): void,
  onError?(files: string): void
}

export const Upload: FunctionComponent<UploadProps> = ({
  name,
  url,
  params,
  extensions,
  multiple,
  disabled,
  onStart,
  onSuccess,
  onError
}) => {
  const [currentStatus, setCurrentStatus] = useState<string | undefined>('');

  const onChangeUpload = (info: UploadChangeParam<UploadFile<any>>) => {
    const { status, name } = info.file;

    let same: boolean = true;

    if (currentStatus !== status) {
      same = false;
      setCurrentStatus(status);
    }

    switch (status) {
      case 'uploading':
        if (!same && onStart) {
          onStart(name);
        }
        break;
      case 'done':
        if (!same && onSuccess) {
          onSuccess(name);
        }
        break;
      case 'error':
        if (!same && onError) {
          onError(name);
        }
        break;
    }
  }

  return (
    <div className="upload-wrapper">
      <UploadAntd.Dragger 
        name={name}
        accept={extensions}
        disabled={disabled ?? false}
        multiple={multiple ?? false}
        action={url}
        data={{params: params}}
        showUploadList={false}
        onChange={onChangeUpload}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Clique ou arraste uma imagem nessa área para começar o upload</p>
        <p className="ant-upload-hint">
          Suporte para um único, ou multiplo arquivos
        </p>
      </UploadAntd.Dragger>
    </div>
  )
};
