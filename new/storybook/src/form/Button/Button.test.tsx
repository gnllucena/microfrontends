import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Button, ButtonProps } from './Button';

const parameters: ButtonProps = {
  text: 'button',
  type: 'submit',
  design: 'primary',
  size: 'small'
}

const component = (
  <Button {...parameters}></Button>
);

describe('Button', () => {
  test('Rendering', () => {
    const wrapper = renderer.create(component);

    let json = wrapper.toJSON();

    expect(json).toMatchSnapshot();
  });
});