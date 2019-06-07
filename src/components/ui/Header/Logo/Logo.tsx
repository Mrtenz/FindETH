import React, { DetailedHTMLProps, FunctionComponent, ImgHTMLAttributes } from 'react';
import { LogoImage } from './StyledLogo';

type Props = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'ref'>;

const Logo: FunctionComponent<Props> = ({ ...props }) => <LogoImage alt="FindETH" {...props} />;

export default Logo;
