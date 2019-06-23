declare module 'react-svg-loader' {
  import { ComponentType } from 'react';

  interface Props {
    fill?: string;
  }

  type ImageComponent = ComponentType<Props>;
}

declare module '*react-svg-loader!*.svg' {
  import { ImageComponent } from 'react-svg-loader';

  const image: ImageComponent;
  export default image;
}
