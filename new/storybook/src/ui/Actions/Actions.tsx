import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from '../../form/Button/Button';

import './Actions.scss';

export interface  ActionAlignmentProps {
  props: ButtonProps,
  alignment: 'left' | 'right'
}
export interface ActionsProps {
  buttons: Array<ActionAlignmentProps>
}

export const Actions: FunctionComponent<ActionsProps> = ({
  buttons
}) => (
  <div className="actions-wrapper">
    {
      buttons.map((action: ActionAlignmentProps, index: number) => (
        <div key={`action-${index}`} className={`actions-button-wrapper-${action.alignment}`}>
          <Button {...action.props}  />
        </div>
      ))
    }
  </div>
)