import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Input from '../ui/Input';
import Typography from '../ui/Typography';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import { setAddress } from '../../store/search';
import { isEnsName } from '../../utils';
import { resolveName, setResolvedAddress } from '../../store/ens';
import Spinner from '../ui/Spinner';
import Address from '../ui/Address';
import Button from '../ui/Button';
import { FlowProps } from '../Flow';
import { ADDRESS_REGEX } from '../../config';

interface StateProps {
  address: string;
  isResolving: boolean;
  resolvedAddress?: string;
}

interface DispatchProps {
  handleChangeAddress(address: string): void;

  handleResolve(name: string): void;

  clearResolved(): void;
}

type Props = StateProps & DispatchProps & FlowProps;

const SelectAddress: FunctionComponent<Props> = ({
  address,
  isResolving,
  resolvedAddress,
  handleChangeAddress,
  handleResolve,
  clearResolved,
  onNext
}) => {
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
      onNext();
    }
  };

  return (
    <>
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
      <Button disabled={!isValid} onClick={handleNext}>
        Next
      </Button>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, FlowProps, ApplicationState> = state => ({
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
