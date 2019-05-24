import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Heading, Input, Typography } from '@mycrypto/ui';
import { RouteComponentProps } from '@reach/router';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../../store';
import { setAddress } from '../../../store/search';
import { history } from '../../../App';
import { SearchType } from '../../../constants';
import { isEnsName } from '../../../utils/ens';
import { resolveName, setResolvedAddress } from '../../../store/ens';
import Spinner from '../../ui/Spinner';
import Address from '../../ui/Address';

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
  type: SearchType;
  address: string;
  isResolving: boolean;
  resolvedAddress?: string;
}

interface DispatchProps {
  handleChangeAddress(address: string): void;

  handleResolve(name: string): void;

  clearResolved(): void;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const SelectAddress: FunctionComponent<Props> = ({
  type,
  address,
  isResolving,
  resolvedAddress,
  handleChangeAddress,
  handleResolve,
  clearResolved
}) => {
  if (type === SearchType.Ether) {
    history.navigate('/steps/2');
  }

  const [inputAddress, setInputAddress] = useState<string>('');
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    handleChangeAddress('');
  }, []);

  useEffect(() => {
    setValid(!!address.match(ADDRESS_REGEX));
  }, [address]);

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(value);
    handleChangeAddress(value);

    if (resolvedAddress) {
      clearResolved();
    }

    if (isEnsName(value)) {
      handleResolve(value);
    }
  };

  const handleNext = () => {
    clearResolved();
    if (isValid) {
      history.navigate('/steps/2');
    }
  };

  return (
    <>
      <Heading as="h2">Select your address</Heading>
      <Typography>What address are you looking for?</Typography>
      <Input
        type="text"
        placeholder="e.g. 0x4bbe...1520 or mycryptoid.eth"
        value={inputAddress}
        onChange={handleChange}
        disabled={isResolving}
      />
      {isResolving && (
        <Spinner width={20} height={20}>
          Resolving address
        </Spinner>
      )}
      {resolvedAddress && <Address address={resolvedAddress} />}
      <CustomButton disabled={!isValid} onClick={handleNext}>
        Next
      </CustomButton>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, ApplicationState> = state => ({
  type: state.search.type,
  address: state.search.address || '',
  isResolving: state.ens.isResolving,
  resolvedAddress: state.ens.resolvedAddress
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleChangeAddress: address => dispatch(setAddress(address)),
  handleResolve: address => dispatch(resolveName(address)),
  clearResolved: () => dispatch(setResolvedAddress(undefined))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddress);
