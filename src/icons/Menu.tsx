import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Menu = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M32.8 18H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2Zm0 8H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2ZM7.2 14h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2Z"
    />
  </Svg>
);
export default Menu;
