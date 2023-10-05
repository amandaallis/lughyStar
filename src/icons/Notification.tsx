import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Notification = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path fill="#fff" d="M30 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path
      fill="#fff"
      d="M21.667 10a8.27 8.27 0 0 1 .703-3.333H10A3.337 3.337 0 0 0 6.667 10v20A3.337 3.337 0 0 0 10 33.333h20A3.337 3.337 0 0 0 33.333 30V17.63a8.269 8.269 0 0 1-3.333.703A8.333 8.333 0 0 1 21.667 10Z"
    />
  </Svg>
);
export default Notification;
