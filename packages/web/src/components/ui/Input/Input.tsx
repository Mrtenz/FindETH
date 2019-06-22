import React, { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';
import { InputContainer, StyledInput } from './StyledInput';
import { ThemedOuterStyledProps } from 'styled-components';
import { FindETHTheme } from '../../../styles';

type Props = ThemedOuterStyledProps<
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>,
  FindETHTheme
>;

/**
 * Based on
 * https://github.com/MyCryptoHQ/ui/blob/57d5b01a6d56199e21f20839994eca19729cbe40/src/atoms/Input/Input.tsx,
 * but with updated styles to work in FindETH.
 */
const Input: FunctionComponent<Props> = ({ as, ...props }) => (
  <InputContainer>
    <StyledInput {...props} />
  </InputContainer>
);

export default Input;
