import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import StyledLoader from './StyledLoader';
import Spinner from './Spinner';

interface Props {
  isVisible: boolean;
}

const RelativeContainer = styled.div`
  position: relative;
`;

const Loader: FunctionComponent<Props> = ({ isVisible, children }) => (
  <RelativeContainer>
    {isVisible && (
      <StyledLoader>
        <Spinner />
      </StyledLoader>
    )}
    {children}
  </RelativeContainer>
);

export default Loader;
