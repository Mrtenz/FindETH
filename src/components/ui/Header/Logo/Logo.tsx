import React, { DetailedHTMLProps, FunctionComponent, ImgHTMLAttributes } from 'react';
import { LogoImage } from './StyledLogo';
import findEthLogo from '../../../../assets/images/logos/findeth/findeth.svg';

type Props = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'ref'>;

const Logo: FunctionComponent<Props> = ({ ...props }) => (
  <LogoImage src={findEthLogo} alt="FindETH" {...props} />
);

export default Logo;
