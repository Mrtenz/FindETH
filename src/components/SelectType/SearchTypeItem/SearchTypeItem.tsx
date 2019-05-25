import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { SearchType } from '../../../config';
import { setSearchType } from '../../../store/search';
import { SearchButton } from './StyledSearchTypeItem';
import { history } from '../../../App';

interface OwnProps {
  type: SearchType;
}

interface DispatchProps {
  handleClick(): void;
}

type Props = OwnProps & DispatchProps;

const SearchTypeItem: FunctionComponent<Props> = ({ children, handleClick }) => (
  <SearchButton onClick={handleClick}>{children}</SearchButton>
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { type }) => ({
  handleClick(): void {
    dispatch(setSearchType(type));
    if (type === SearchType.Ether) {
      history.navigate('/flow/ether');
    } else {
      history.navigate('/flow/address');
    }
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(SearchTypeItem);
