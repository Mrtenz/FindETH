import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Heading, Input, Typography } from '@mycrypto/ui';
import { navigate, RouteComponentProps } from '@reach/router';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { setAddress } from '../../../store/search';
import { history } from '../../../App';

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

const CustomButton = styled(Button)`
  margin-top: 18px;
  background: ${({ disabled, theme }) => disabled && theme.switchBackgroundGreyable};

  &:hover {
    background: ${({ disabled, theme }) => disabled && theme.switchBackgroundGreyable};
    cursor: ${({ disabled }) => (disabled && 'default') || 'pointer'};
  }
`;

interface StateProps {
  address: string;
}

interface DispatchProps {
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const SelectAddress: FunctionComponent<Props> = ({ address, handleChange }) => {
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    setValid(!!address.match(ADDRESS_REGEX));
  }, [address]);

  const handleNext = () => {
    if (isValid) {
      history.navigate('/steps/1');
    }
  };

  return (
    <>
      <Heading as="h2">Select your address</Heading>
      <Typography>What address are you looking for?</Typography>
      <Input
        type="text"
        placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        value={address}
        onChange={handleChange}
      />
      <CustomButton disabled={!isValid} onClick={handleNext}>
        Next
      </CustomButton>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  address: state.search.address || ''
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleChange: event => dispatch(setAddress(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddress);
