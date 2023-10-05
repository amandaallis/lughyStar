import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Home = (props: SvgProps) => (
  <Svg width={40} height={34} fill="none" {...props}>
    <Path fill="#fff" d="M16 34V22h8v12h10V18h6L20 0 0 18h6v16h10Z" />
  </Svg>
);
export default Home;
