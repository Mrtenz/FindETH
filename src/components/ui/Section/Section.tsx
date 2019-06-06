import React, { FunctionComponent } from 'react';
import { SectionContainer, SectionContainerProps } from './StyledSection';
import Container from '../Container';
import { StyledProps } from '../../../styles';

type Props = StyledProps<SectionContainerProps>;

const Section: FunctionComponent<Props> = ({ children, ...props }) => (
  <SectionContainer {...props}>
    <Container>{children}</Container>
  </SectionContainer>
);

export default Section;
