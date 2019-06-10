import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import Input from '../ui/Input';
import Typography from '../ui/Typography';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store';
import Spinner from '../ui/Spinner';
import { FlowProps } from '../Flow';
import Button from '../ui/Button';
import { fetchToken, Token } from '../../store/tokens';
import { ADDRESS_REGEX } from '../../config';
import TokenDetails from './TokenDetails';

interface StateProps {
  isFetching: boolean;
  token?: Token;
}

interface DispatchProps {
  handleFetchToken(address: string): void;
}

type Props = StateProps & DispatchProps & FlowProps;

const SelectToken: FunctionComponent<Props> = ({ isFetching, token, handleFetchToken, onNext }) => {
  const [inputAddress, setInputAddress] = useState<string>('');

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(value);

    if (value.match(ADDRESS_REGEX)) {
      handleFetchToken(value);
    }
  };

  return (
    <>
      <Typography>What token are you looking for?</Typography>
      <Input
        type="text"
        placeholder="e.g. 0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
        value={inputAddress}
        onChange={handleChange}
        disabled={isFetching}
      />
      {isFetching && (
        <Spinner width={20} height={20}>
          Fetching token info
        </Spinner>
      )}
      {token && <TokenDetails token={token} />}
      <Button disabled={!token} onClick={onNext}>
        Next
      </Button>
    </>
  );
};

const mapStateToProps: MapStateToProps<StateProps, FlowProps, ApplicationState> = state => ({
  isFetching: state.tokens.isFetching,
  token: state.tokens.token
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  handleFetchToken: (address: string) => dispatch(fetchToken(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectToken);
