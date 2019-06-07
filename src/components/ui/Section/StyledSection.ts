import styled from 'styled-components';
import Heading from '../Heading';

export interface SectionContainerProps {
  paddingTop?: boolean | string;
  paddingBottom?: boolean | string;
  secondary?: boolean;
  dark?: boolean;
  grow?: boolean;
  border?: boolean;
}

const DEFAULT_PADDING = '4.6875rem';

const getPadding = (paddingTop: boolean | string, paddingBottom: boolean | string) => {
  const paddingTopValue: string =
    typeof paddingTop === 'string' ? paddingTop : paddingTop ? DEFAULT_PADDING : '0';

  const paddingBottomValue: string =
    typeof paddingBottom === 'string' ? paddingBottom : paddingBottom ? DEFAULT_PADDING : '0';

  return `${paddingTopValue} 0 ${paddingBottomValue} 0`;
};

export const SectionContainer = styled.section<SectionContainerProps>`
  flex-grow: ${({ grow }) => (grow ? '1' : 'unset')};
  padding: ${({ paddingTop = true, paddingBottom = true }) =>
    getPadding(paddingTop, paddingBottom)};
  background: ${({ theme, dark = false, secondary = false }) =>
    dark
      ? theme.darkBackground
      : secondary
      ? theme.secondarySectionBackground
      : theme.primarySectionBackground};
  border-top: ${({ theme, border = false }) => (border ? `1px solid ${theme.line}` : 'none')};

  & ${Heading} {
    margin-top: 0;
  }
`;
